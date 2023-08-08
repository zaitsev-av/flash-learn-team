import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetDecksType, PaginationType } from '@/services'

type InitialStateType = {
  pagination: PaginationType
  queryParams: Partial<GetDecksType>
}

const initialState: InitialStateType = {
  pagination: {
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
  },
  queryParams: {
    name: '',
    authorId: '',
    orderBy: '',
    currentPage: 1,
    itemsPerPage: 10,
    maxCardsCount: '',
    minCardsCount: '',
  },
}

const slice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<GetDecksType>) => {
      state.queryParams = action.payload
    },
  },
})

export const decksReducer = slice.reducer
