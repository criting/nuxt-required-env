export default defineNuxtConfig(
  {
    modules: ['../src/module', 'nuxt-required-env'],
    devtools: { enabled: true },
    runtimeConfig: {
      STRIPE_KEY: process.env.STRIPE_KEY,
      public: {
        SUPABASE_URL: process.env.SUPABASE_URL,
      },
    },
    requiredEnv: {
      env: ['STRIPE_KEY', 'SUPABASE_URL', 'MY_SECRET'],
    },
  })