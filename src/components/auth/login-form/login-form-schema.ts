import { z } from 'zod'

export const loginFormSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Password must be at least 3 characters')
    .max(30, 'Password length should not exceed 30 characters'),
  rememberMe: z.boolean().optional(),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})
