import {
  CardResponseType,
  CardsResponseType,
  CreateCardRequestType,
  DecksResponseType,
  GetCardsRequestType,
  GetDecksType,
  ItemsType,
  UpdateCardGradeType,
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
        /* async onQueryStarted(id, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            decksApi.util.updateQueryData('getDecks', { id }, draft => {
              const index = draft.index.findIndex(card => card._id === cardId)

              if (index !== -1) draft.cards.splice(index, 1)
            })
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },*/
        invalidatesTags: ['Decks'],
      }),
      createCard: builder.mutation<CardResponseType, CreateCardRequestType>({
        query: ({ id, ...rest }) => {
          return {
            method: 'POST',
            url: `v1/decks/${id}/cards`,
            body: { ...rest },
          }
        },
        invalidatesTags: ['Cards'],
      }),
      learnDeck: builder.query<CardResponseType, string>({
        query: id => {
          return {
            method: 'GET',
            url: `v1/decks/${id}/learn`,
          }
        },
        providesTags: ['Learn'],
      }),
      updateCardGrade: builder.mutation<void, UpdateCardGradeType>({
        query: ({ id, ...rest }) => {
          return {
            method: 'POST',
            url: `v1/decks/${id}/learn`,
            body: { ...rest },
          }
        },
        invalidatesTags: ['Learn'],
      }),
    }
  },
})
export const {
  useGetDeckQuery,
  useGetDecksQuery,
  useGetCardsQuery,
  useLearnDeckQuery,
  useCreateCardMutation,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useUpdateCardGradeMutation,
} = decksApi
