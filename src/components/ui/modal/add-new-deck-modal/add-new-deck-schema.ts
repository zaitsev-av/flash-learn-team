import { z } from 'zod'

export const addNewDeckSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Please enter a name for the pack')
    .min(3, 'Pack name must be at least 3 characters')
    .max(25, 'Pack name must be at more 25 characters'),
  cover: z
    .any()
    // .refine(file => file?.size <= maxSize, 'Maximum file size 2MB')
    // .refine(
    //   file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file?.type),
    //   'You can only upload .jpg, .jpeg, .png files'
    // )
    .optional(),
  isPrivate: z.boolean().default(false),
})
