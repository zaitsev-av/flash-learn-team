import { useState } from 'react'

import { Sort } from '@/components'
import { useGetDecksQuery } from '@/services'

export const useDecks = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const [search, setSearch] = useState<string>('')

  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`
  const { data } = useGetDecksQuery({
    authorId: '',
    currentPage: page,
    itemsPerPage: +pageSize,
    name: search,
    maxCardsCount: '',
    minCardsCount: '',
    orderBy: sortValue,
  })
  const [sliderValues, setSliderValues] = useState<[number, number]>([
    0,
    data?.maxCardsCount ?? 100,
  ])

  return {
    data,
    sort,
    page,
    setPage,
    setPageSize,
    setSort,
    pageSize,
    search,
    setSearch,
    sliderValues,
    setSliderValues,
  }
}
