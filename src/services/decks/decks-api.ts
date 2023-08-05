import { CardsResponseType } from '@/services/cards/cards-types.ts'
import {
  CreateCardRequestType,
  CreateCardResponseType,
  DecksResponseType,
  GetCardsRequestType,
  GetDecksType,
  ItemsType,
  UpdateDeckResponseType,
} from '@/services/decks/decks-types.ts'
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
      getCards: builder.query<CardsResponseType, GetCardsRequestType>({
        query: ({ id, itemsPerPage, currentPage, orderBy, answer, question }) => {
          return {
            method: 'GET',
            url: `v1/decks/${id}/cards`,
            params: { orderBy, answer, question, itemsPerPage, currentPage },
          }
        },
        providesTags: ['Cards'],
      }),
      getDeck: builder.query<ItemsType, string>({
        query: id => {
          return {
            method: 'GET',
            url: `v1/decks/${id}`,
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
          invalidatesTags: ['Decks'],
        }
      ),
      updateDeck: builder.mutation<ItemsType, UpdateDeckResponseType>({
        query: ({ id, name, cover, isPrivate }) => {
          return {
            method: 'PATCH',
            url: `v1/decks/${id}`,
            body: { name, cover, isPrivate },
          }
        },
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Omit<ItemsType, 'author'>, string>({
        query: id => {
          return {
            method: 'DELETE',
            url: `v1/decks/${id}`,
          }
        },
        invalidatesTags: ['Decks'],
      }),
      createCard: builder.mutation<CreateCardResponseType, CreateCardRequestType>({
        query: ({ id, ...rest }) => {
          return {
            method: 'POST',
            url: `v1/decks/${id}/cards`,
            body: { ...rest },
          }
        },
        invalidatesTags: ['Cards'],
      }),
    }
  },
})
export const {
  useGetDeckQuery,
  useGetDecksQuery,
  useGetCardsQuery,
  useCreateCardMutation,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
} = decksApi
