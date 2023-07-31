import { DecksResponseType, GetDecksType } from '@/services/decks/decks-api-types.ts'
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
    }
  },
})
export const { useGetDecksQuery } = decksApi

/*
export type GetDecksType = {
  minCardsCount: string
  maxCardsCount: string
  name: string
  authorId: string
  orderBy: string
  currentPage: number
  itemsPerPage: number
}*/
