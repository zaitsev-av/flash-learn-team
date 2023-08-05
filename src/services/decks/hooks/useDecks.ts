import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { useDebounce } from '@/app/hooks/useDebounce.ts'
import { Sort } from '@/components'
import {
  useAuthMeQuery,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services'

export const useDecks = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const [filterRange, setFilterRange] = useState<[number, number]>([0, 100])
  const [myDecks, setMyDecks] = useState<string>('')
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const { data: authData } = useAuthMeQuery()

  const isMe = authData?.id

  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const sortValue =
    sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

  const { data } = useGetDecksQuery({
    authorId: myDecks,
    currentPage: page,
    itemsPerPage: +pageSize,
    name: debouncedSearchQuery,
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

  const handleDeleteDeck = (id: string) => {
    deleteDeck(id)
      .unwrap()
      .then(res => {
        toast.success(`You have successfully removed the deck: ${res.name} 👍`)
      })
      .catch(error => {
        if (error.status === 404) {
          toast.error(`Sorry, something went wrong 🙈`)
        } else {
          console.warn(error)
        }
      })
  }

  useEffect(() => {
    if (data) {
      setSliderValues([0, data.maxCardsCount])
      setFilterRange([0, data.maxCardsCount])
    }
  }, [data?.maxCardsCount])

  return {
    isMe,
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
    handleDeleteDeck,
    updateDeck, // todo сделать обработку
  }
}
