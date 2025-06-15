<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-required-env
- Package name: nuxt-required-env
- Description: nuxt-required-env
-->

# My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

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

```
export default defineNuxtConfig({
  modules: ['nuxt-required-env'],
  requiredEnv: {
    env: ['STRIPE_KEY', 'SUPABASE_URL', 'MY_SECRET'],
  },
  runtimeConfig: {
    STRIPE_KEY: process.env.STRIPE_KEY,
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
    },
  },
})```

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
