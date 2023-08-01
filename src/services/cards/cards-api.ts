import { flashLearnApi } from '@/services'

export const cardsApi = flashLearnApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<any, string>({
        query: id => {
          return {
            method: 'GET',
            url: `v1/cards/${id}`,
          }
        },
      }),
    }
  },
})

export const { useLazyGetCardsQuery } = cardsApi
