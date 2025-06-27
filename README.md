<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-required-env
- Package name: nuxt-required-env
- Description: nuxt-required-env
-->

# nuxt-required-env

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Ensure that all required environment variables exist.

## Features

<!-- Highlight some of the features your module provide here -->
- ✅ Define required environment variables
- 🔒 Fails fast in dev or build if any are missing
- ⚙️ Checks both .env and runtimeConfig
- 🛠 Improves deployment safety and DX
- 📦 Zero dependencies

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-required-env
```
Create a file called env-schema.ts in your project root:
```
import { z } from 'zod'

export const EnvSchema = z.object({
  NUXT_PUBLIC_SITE_URL: z.string().url(),
  STRIPE_KEY: z.string(),
  SUPABASE_URL: z.string().url(),
  MY_SECRET: z.string().min(10),
})
```

If your schema is in a different path, set it via module options:
```
export default defineNuxtConfig({
  modules: ['nuxt-required-env'],
  requiredEnv: {
    schemaPath: 'config/env-schema', // path relative to project root, without extension
  },
})
```
That's it! You can now use nuxt-required-envin your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-required-env/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-required-env

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-required-env.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-required-env

[license-src]: https://img.shields.io/npm/l/nuxt-required-env.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-required-env

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
