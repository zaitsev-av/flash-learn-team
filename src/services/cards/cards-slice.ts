import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetCardsRequestType } from '@/services'

type InitialStateType = {
  queryParams: Partial<GetCardsRequestType>
}

const initialState: InitialStateType = {
  queryParams: {
    id: '',
    answer: '',
    question: '',
    itemsPerPage: 10,
    currentPage: 1,
    orderBy: '',
  },
}

const slice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<Partial<GetCardsRequestType>>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
  },
})

export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
