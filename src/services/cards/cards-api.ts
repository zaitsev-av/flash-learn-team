import { CardResponseType, flashLearnApi } from '@/services'

export const cardsApi = flashLearnApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCard: builder.query<CardResponseType, string>({
        query: id => {
          return {
            method: 'GET',
            url: `v1/cards/${id}`,
          }
        },
      }),
      updateCard: builder.mutation<CardResponseType, UpdateCardRequestType>({
        query: ({ id, data }) => {
          return {
            method: 'PATCH',
            url: `v1/cards/${id}`,
            body: data,
          }
        },
        invalidatesTags: ['Cards'],
      }),
      deleteCard: builder.mutation<void, string>({
        query: id => {
          return {
            method: 'DElETE',
            url: `v1/cards/${id}`,
          }
        },
        invalidatesTags: ['Cards'],
      }),
    }
  },
})

export const { useGetCardQuery, useUpdateCardMutation, useDeleteCardMutation } = cardsApi

type UpdateCardRequestType = {
  id: string
  data: FormData
}
