import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetDecksType } from '@/services'

type InitialStateType = {
  queryParams: GetDecksType
}

const initialState: InitialStateType = {
  queryParams: {
    name: '',
    authorId: '',
    orderBy: '',
    currentPage: 1,
    itemsPerPage: 10,
    maxCardsCount: undefined,
    minCardsCount: undefined,
  },
}

const slice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<GetDecksType>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
  },
})

export const decksReducer = slice.reducer
export const decksActions = slice.actions
