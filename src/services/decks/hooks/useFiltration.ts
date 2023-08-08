import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import { useDebounce } from '@/helpers/hooks/useDebounce.ts'
import { DecksResponseType } from '@/services'
import { selectGetNameQueryParams } from '@/services/decks/decks-selectors.ts'
import { decksActions } from '@/services/decks/decks-slice.ts'

export const useFiltration = () => {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<Sort>(null)
  // const [searchQuery, setSearchQuery] = useState<string>('')
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])
  const [myDecks, setMyDecks] = useState<string>('')
  const searchQuery = useAppSelector(selectGetNameQueryParams)
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

  const resetFilters = (data: DecksResponseType) => {
    // setSearchQuery('')
    setMyDecks('')
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }
  const setSearchQuery = (searchQuery: string) => {
    dispatch(decksActions.setQueryParams({ name: searchQuery }))
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
    sortValue,
    resetFilters,
  }
}
