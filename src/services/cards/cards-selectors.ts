import { RootState } from '@/app/store.ts'

export const selectGetId = (state: RootState) => state.cards.queryParams.id
export const selectGetAnswer = (state: RootState) => state.cards.queryParams.answer
export const selectGetQuestion = (state: RootState) => state.cards.queryParams.question
export const selectGetItemsPerPage = (state: RootState) => state.cards.queryParams.itemsPerPage
export const selectGetCurrentPage = (state: RootState) => state.cards.queryParams.currentPage
export const selectGetOrderBy = (state: RootState) => state.cards.queryParams.orderBy
