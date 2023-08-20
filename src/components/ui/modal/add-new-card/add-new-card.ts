import { z } from 'zod'
const maxSize = 200_000

export const addNewCard = z.object({
  question: z
    .string()
    .trim()
    .nonempty('Please enter a question')
    .min(5, 'Question must be at least 3 characters')
    .max(50, 'Question must be at more 50 characters'),
  answer: z
    .string()
    .trim()
    .nonempty('Please enter a answer')
    .min(3, 'Answer must be at least 3 characters')
    .max(100, 'Answer must be at more 100 characters'),
  questionImg: z
    .any()
    .refine(file => file?.size <= maxSize, 'Maximum file size 2MB')
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file?.type),
      'You can upload .jpg, .jpeg, .png files'
    )
    .optional(),
  answerImg: z
    .any()
    .refine(file => file?.size <= maxSize, 'Maximum file size 2MB')
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file?.type),
      'You can upload .jpg, .jpeg, .png files'
    )
    .optional(),
})
