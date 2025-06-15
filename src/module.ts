import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  env: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-required-env',
    configKey: 'requiredEnv',
  },
  defaults: {
    env: [],
  },
  setup(options, nuxt) {
    nuxt.hook('ready', () => {
      const missingFromEnv: string[] = []
      const missingFromRuntimeConfig: string[] = []

      for (const key of options.env) {
        if (!process.env[key]) {
          missingFromEnv.push(key)
        }

        const inRuntime = key in (nuxt.options.runtimeConfig || {})
          || key in (nuxt.options.runtimeConfig.public || {})

        if (!inRuntime) {
          missingFromRuntimeConfig.push(key)
        }
      }

      if (missingFromEnv.length || missingFromRuntimeConfig.length) {
        if (missingFromEnv.length) {
          console.error('\n❌ Missing from `.env` or system environment:')
          missingFromEnv.forEach(key => console.error(`  • ${key}`))
        }

        if (missingFromRuntimeConfig.length) {
          console.error('\n❌ Not exposed in `runtimeConfig`:')
          missingFromRuntimeConfig.forEach(key => console.error(`  • ${key}`))
        }

        console.error('\n💥 Please fix your environment and restart Nuxt.\n')
        process.exit(1)
      }
      else {
        console.info('✅ All required environment variables are present and exposed.')
      }
    })
  },
})
