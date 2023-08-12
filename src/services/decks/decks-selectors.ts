import { RootState } from '@/app/store.ts'

export const selectGetName = (state: RootState) => state.decks.queryParams.name
export const selectGetAuthorId = (state: RootState) => state.decks.queryParams.authorId
export const selectGetOrderBy = (state: RootState) => state.decks.queryParams.orderBy
export const selectGetCurrentPage = (state: RootState) => state.decks.queryParams.currentPage
export const selectGetItemsPerPage = (state: RootState) => state.decks.queryParams.itemsPerPage

//todo удалить если ненужно будет
export const selectGetMinCardsCountQueryParams = (state: RootState) =>
  state.decks.queryParams.minCardsCount
export const selectGetMaxCardsCountQueryParams = (state: RootState) =>
  state.decks.queryParams.maxCardsCount
