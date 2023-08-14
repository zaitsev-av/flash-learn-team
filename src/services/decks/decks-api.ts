import { RootState } from '@/app/store.ts'
import {
  CardResponseType,
  CardsResponseType,
  CreateCardRequestType,
  DecksResponseType,
  DeleteDeckArgs,
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
          async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
            const state = getState() as RootState

            const {
              name,
              orderBy,
              currentPage,
              itemsPerPage,
              maxCardsCount,
              minCardsCount,
              authorId,
            } = state.decks.queryParams

            try {
              const res = await queryFulfilled

              dispatch(
                decksApi.util.updateQueryData(
                  'getDecks',
                  {
                    name,
                    orderBy,
                    currentPage,
                    itemsPerPage,
                    maxCardsCount,
                    minCardsCount,
                    authorId,
                  },
                  draft => {
                    draft.items.pop()
                    draft.items.unshift(res.data)
                  }
                )
              )
            } catch {
              // patchResult.undo()
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
        async onQueryStarted({ id, name: newName }, { dispatch, getState }) {
          const state = getState() as RootState

          const {
            name,
            orderBy,
            currentPage,
            itemsPerPage,
            maxCardsCount,
            minCardsCount,
            authorId,
          } = state.decks.queryParams

          dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              { name, orderBy, currentPage, itemsPerPage, maxCardsCount, minCardsCount, authorId },
              draft => {
                const index = draft.items.findIndex(deck => deck.id === id)

                draft.items[index].name = newName
              }
            )
          )
        },
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Omit<ItemsType, 'author'>, DeleteDeckArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
            method: 'DELETE',
          }
        },
        async onQueryStarted({ id }, { dispatch, getState }) {
          const state = getState() as RootState

          const {
            name,
            orderBy,
            currentPage,
            itemsPerPage,
            maxCardsCount,
            minCardsCount,
            authorId,
          } = state.decks.queryParams

          dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              { name, orderBy, currentPage, itemsPerPage, maxCardsCount, minCardsCount, authorId },
              draft => {
                const index = draft.items.findIndex(deck => deck.id === id)

                if (index !== -1) draft.items.splice(index, 1)
              }
            )
          )
        },
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
