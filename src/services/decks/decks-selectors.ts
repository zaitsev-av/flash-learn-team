import { RootState } from '@/app/store.ts'

export const selectGetName = (state: RootState) => state.decks.queryParams.name
export const selectGetAuthorId = (state: RootState) => state.decks.queryParams.authorId
export const selectGetOrderBy = (state: RootState) => state.decks.queryParams.orderBy
export const selectGetCurrentPage = (state: RootState) => state.decks.queryParams.currentPage
export const selectGetItemsPerPage = (state: RootState) => state.decks.queryParams.itemsPerPage
export const selectGetMinCardsCount = (state: RootState) => state.decks.queryParams.minCardsCount
export const selectGetMaxCardsCount = (state: RootState) => state.decks.queryParams.maxCardsCount
