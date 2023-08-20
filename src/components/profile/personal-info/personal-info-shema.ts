import { z } from 'zod'
const maxSize = 2000000

export const personalInfo = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Please enter a question')
    .min(5, 'Question must be at least 3 characters')
    .max(50, 'Question must be at more 50 characters'),
  avatar: z
    .any()
    .refine(file => file?.size <= maxSize, 'Maximum file size 2MB')
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file?.type),
      'You can upload .jpg, .jpeg, .png files'
    )
    .optional(),
})
