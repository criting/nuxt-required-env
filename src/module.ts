import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { z, ZodType } from 'zod'
import { existsSync } from 'fs'

export interface ModuleOptions {
  schemaPath?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-required-env',
    configKey: 'requiredEnv',
  },
  defaults: {
    schemaPath: 'env-schema',
  },
  setup(options, nuxt) {
    const resolver = createResolver(nuxt.options.rootDir)
    const resolvedPath = resolver.resolve(options.schemaPath || 'env-schema')

    nuxt.hook('ready', async () => {
      const schemaFileExists = existsSync(resolvedPath + '.ts') || existsSync(resolvedPath + '.js')

      if (!schemaFileExists) {
        console.error(`\n❌ No schema file found at '${options.schemaPath}.ts'.`)
        console.error('💡 Please create your schema file or update `schemaPath` in nuxt.config.ts.\n')
        process.exit(1)
      }

      let schemaModule: { EnvSchema: ZodType<any> }

      try {
        schemaModule = await import(resolvedPath)
      } catch (error) {
        console.error('\n❌ Failed to import your schema file.')
        console.error(error)
        process.exit(1)
      }

      const { EnvSchema } = schemaModule

      if (!EnvSchema || !(EnvSchema instanceof z.ZodType)) {
        console.error('\n❌ Schema file does not export a valid Zod schema as `EnvSchema`.')
        process.exit(1)
      }

      // Validate environment variables using schema
      let parsedEnv: Record<string, any>
      try {
        parsedEnv = EnvSchema.parse(process.env)
        console.info('✅ All required environment variables are valid (schema).')
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error('\n❌ Invalid environment variables:')
          error.errors.forEach(e => {
            console.error(`  • ${e.path.join('.')}: ${e.message}`)
          })
        } else {
          console.error(error)
        }
        console.error('\n💥 Please fix your environment and restart Nuxt.\n')
        process.exit(1)
      }

      // Check if required keys are exposed in runtimeConfig
      const missingFromRuntimeConfig: string[] = []

      for (const key of Object.keys(parsedEnv)) {
        const inRuntime = key in (nuxt.options.runtimeConfig || {})
          || key in (nuxt.options.runtimeConfig.public || {})

        if (!inRuntime) {
          missingFromRuntimeConfig.push(key)
        }
      }

      if (missingFromRuntimeConfig.length) {
        console.error('\n❌ Not exposed in `runtimeConfig`:')
        missingFromRuntimeConfig.forEach(key => console.error(`  • ${key}`))
        console.error('\n💥 Please ensure these keys are exposed via `runtimeConfig` in your nuxt.config.ts.\n')
        process.exit(1)
      } else {
        console.info('✅ All required variables are exposed in runtimeConfig.')
      }
    })
  },
})