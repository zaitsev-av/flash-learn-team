import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import { useDebounce } from '@/helpers/hooks/useDebounce.ts'
import { DecksResponseType } from '@/services'
import {
  selectGetAuthorIdQueryParams,
  selectGetNameQueryParams,
  selectGetOrderByQueryParams,
} from '@/services/decks/decks-selectors.ts'
import { decksActions } from '@/services/decks/decks-slice.ts'

export const useFiltration = () => {
  const dispatch = useAppDispatch()

  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])

  const searchQuery = useAppSelector(selectGetNameQueryParams)
  const myDecks = useAppSelector(selectGetAuthorIdQueryParams)
  const sort = useAppSelector(selectGetOrderByQueryParams)
  /*  const minCardsCount = useAppSelector(selectGetMinCardsCountQueryParams)
  const maxCardsCount = useAppSelector(selectGetOrderByQueryParams)*/
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const setSort = (sort: Sort) => {
    const sortValue =
      sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

    dispatch(decksActions.setQueryParams({ orderBy: sortValue }))
  }

  const setMyDecks = (id: string) => {
    dispatch(decksActions.setQueryParams({ authorId: id }))
  }

  const setSearchQuery = (searchQuery: string) => {
    dispatch(decksActions.setQueryParams({ name: searchQuery }))
  }

  const resetFilters = (data: DecksResponseType) => {
    setSearchQuery('')
    setMyDecks('')
    setSort(null)
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }

  return {
    sort,
    setSort,
    searchQuery,
    setSearchQuery,
    sliderValues,
    setSliderValues,
    filterRange,
    setFilterRange,
    myDecks,
    setMyDecks,
    debouncedSearchQuery,
    resetFilters,
  }
}
