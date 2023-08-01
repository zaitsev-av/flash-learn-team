import { DecksResponseType, GetDecksType, ItemsType } from '@/services/decks/decks-api-types.ts'
import { flashLearnApi } from '@/services/flash-learn-api.ts'

export const decksApi = flashLearnApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponseType, GetDecksType>({
        query: params => {
          return {
            method: 'GET',
            url: `v1/decks`,
            params,
          }
        },
      }),
      createDeck: builder.mutation<ItemsType, { cover?: string; name: string; isPrivate: boolean }>(
        {
          query: body => {
            return {
              method: 'POST',
              url: `v1/decks`,
              body,
            }
          },
        }
      ),
    }
  },
})
export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
