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
        providesTags: ['Decks'],
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
      updateDeck: builder.mutation<
        ItemsType,
        { id: string; name: string; cover?: string; isPrivate: boolean }
      >({
        query: ({ id, name, cover, isPrivate }) => {
          return {
            method: 'PATCH',
            url: `v1/decks/${id}`,
            body: { name, cover, isPrivate },
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})
export const { useGetDecksQuery, useCreateDeckMutation, useUpdateDeckMutation } = decksApi
