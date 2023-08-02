import { z } from 'zod'

export const editPackSchema = z.object({
  newNamePack: z
    .string()
    .trim()
    .nonempty('Please enter a name for the pack')
    .min(3, 'Pack name must be at least 3 characters')
    .max(25, 'Pack name must be at more 25 characters'),
  isPrivate: z.boolean().optional(),
})
