import { RootState } from '@/app/store.ts'

export const selectGetNameQueryParams = (state: RootState) => state.decks.queryParams.name
export const selectGetAuthorIdQueryParams = (state: RootState) => state.decks.queryParams.authorId
export const selectGetOrderByQueryParams = (state: RootState) => state.decks.queryParams.orderBy
export const selectGetCurrentPageQueryParams = (state: RootState) =>
  state.decks.queryParams.currentPage
export const selectGetItemsPerPageQueryParams = (state: RootState) =>
  state.decks.queryParams.itemsPerPage

//todo удалить если ненужно будет
export const selectGetMinCardsCountQueryParams = (state: RootState) =>
  state.decks.queryParams.minCardsCount
export const selectGetMaxCardsCountQueryParams = (state: RootState) =>
  state.decks.queryParams.maxCardsCount
