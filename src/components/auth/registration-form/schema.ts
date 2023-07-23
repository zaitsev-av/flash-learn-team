import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email('Email is not valid').trim().nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(3, 'Password must be at least 3 characters')
      .max(30, 'The password must be more than 30 characters long'),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
      })
    }

    return data
  })
