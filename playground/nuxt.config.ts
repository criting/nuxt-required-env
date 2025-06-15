export default defineNuxtConfig({
  modules: ['../src/module'],
  requiredEnv: {
  env: ['STRIPE_KEY', 'SUPABASE_URL', 'MY_SECRET']
},

  runtimeConfig: {
    STRIPE_KEY: process.env.STRIPE_KEY,
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL
    }
  },
  devtools: { enabled: true },
})
