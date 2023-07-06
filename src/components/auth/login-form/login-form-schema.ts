import { z } from 'zod'

export const loginFormSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})
