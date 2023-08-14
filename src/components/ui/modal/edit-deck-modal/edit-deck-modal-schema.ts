import { z } from 'zod'

export const editPackSchema = z.object({
  newNameDeck: z
    .string()
    .trim()
    .nonempty('Please enter a name for the pack')
    .min(3, 'Deck name must be at least 3 characters')
    .max(25, 'Deck name must be at more 25 characters'),
  isPrivate: z.boolean().optional(),
})
