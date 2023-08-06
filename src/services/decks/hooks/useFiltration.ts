import { useState } from 'react'

import { Sort } from '@/components'
import { useDebounce } from '@/helpers/hooks/useDebounce.ts'
import { DecksResponseType } from '@/services'

export const useFiltration = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])
  const [myDecks, setMyDecks] = useState<string>('')

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

  const resetFilters = (data: DecksResponseType) => {
    setSearchQuery('')
    setMyDecks('')
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
    sortValue,
    resetFilters,
  }
}
