import { useEffect, useState } from 'react'

import { Sort } from '@/components'
import { useGetDecksQuery } from '@/services'

export const useDecks = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])
  const [myDecks, setMyDecks] = useState<string>('')

  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`
  const { data } = useGetDecksQuery({
    authorId: myDecks,
    currentPage: page,
    itemsPerPage: +pageSize,
    name: searchQuery,
    minCardsCount: filterRange[0].toString(),
    maxCardsCount: filterRange[1].toString(),
    orderBy: sortValue,
  })

  const resetFilters = () => {
    setSearchQuery('')
    setMyDecks('')
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }

  useEffect(() => {
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }, [data?.maxCardsCount])

  return {
    data,
    sort,
    page,
    filterRange,
    searchQuery,
    myDecks,
    pageSize,
    setPage,
    setSort,
    setSearchQuery,
    setMyDecks,
    setPageSize,
    sliderValues,
    resetFilters,
    setSliderValues,
    setFilterRange,
  }
}
