import { z } from 'zod'

export const EnvSchema = z.object({
  NUXT_PUBLIC_SITE_URL: z.string().url(),
  STRIPE_KEY: z.string(),
})