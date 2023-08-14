import { useState } from 'react'

import { useAppDispatch, useAppSelector, useDebounce } from '@/common'
import { useAuthMeQuery } from '@/services'
import {
  selectGetAuthorId,
  selectGetCurrentPage,
  selectGetItemsPerPage,
  selectGetMaxCardsCount,
  selectGetMinCardsCount,
  selectGetName,
  selectGetOrderBy,
} from '@/services/decks/decks-selectors.ts'
import { decksActions } from '@/services/decks/decks-slice.ts'

export const useDecksFilter = () => {
  const dispatch = useAppDispatch()

  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const { data: authData } = useAuthMeQuery()

  const isMe = authData?.id

  const min = useAppSelector(selectGetMinCardsCount)
  const max = useAppSelector(selectGetMaxCardsCount)
  const page = useAppSelector(selectGetCurrentPage)
  const myDecks = useAppSelector(selectGetAuthorId)
  const orderBy = useAppSelector(selectGetOrderBy)
  const pageSize = useAppSelector(selectGetItemsPerPage)
  const searchQuery = useAppSelector(selectGetName)

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const setSliderRange = (value: [number, number]) => {
    dispatch(decksActions.setQueryParams({ minCardsCount: value[0], maxCardsCount: value[1] }))
  }

  const setPage = (value: number) => {
    dispatch(decksActions.setQueryParams({ currentPage: value }))
  }

  const setPageSize = (pageSize: string) => {
    dispatch(decksActions.setQueryParams({ itemsPerPage: +pageSize }))
  }

  const setMyDecks = (id: string) => {
    dispatch(decksActions.setQueryParams({ authorId: id }))
  }

  const setSearchQuery = (searchQuery: string) => {
    dispatch(decksActions.setQueryParams({ name: searchQuery }))
  }

  return {
    min,
    max,
    isMe,
    page,
    myDecks,
    orderBy,
    pageSize,
    searchQuery,
    sliderValues,
    debouncedSearchQuery,
    setSliderRange,
    setPage,
    setMyDecks,
    setPageSize,
    setSearchQuery,
    setSliderValues,
  }
}
