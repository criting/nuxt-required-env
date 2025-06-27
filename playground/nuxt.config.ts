export default defineNuxtConfig(
  {
    modules: ['../src/module', 'nuxt-required-env'],
    devtools: { enabled: true },
    runtimeConfig: {
      STRIPE_KEY: process.env.STRIPE_KEY,
      public: {
        NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
        SUPABASE_URL: process.env.SUPABASE_URL,
      },
    },
  })
