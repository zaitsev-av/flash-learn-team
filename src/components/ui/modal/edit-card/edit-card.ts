import { z } from 'zod'

export const editCard = z.object({
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
})
