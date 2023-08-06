import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import {
  useAuthMeQuery,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services'
import { useFiltration } from '@/services/decks/hooks/useFiltration.ts'

export const useDecks = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const { data: authData } = useAuthMeQuery()
  const isMe = authData?.id

  const {
    sort,
    setSort,
    setSearchQuery,
    setMyDecks,
    searchQuery,
    sliderValues,
    resetFilters,
    myDecks,
    debouncedSearchQuery,
    filterRange,
    sortValue,
    setSliderValues,
    setFilterRange,
  } = useFiltration()

  const { data } = useGetDecksQuery({
    authorId: myDecks,
    currentPage: page,
    itemsPerPage: +pageSize,
    name: debouncedSearchQuery,
    minCardsCount: filterRange[0].toString(),
    maxCardsCount: filterRange[1].toString(),
    orderBy: sortValue,
  })

  const handleResetFilters = () => {
    if (data) resetFilters(data)
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
    handleResetFilters,
    setSliderValues,
    setFilterRange,
    handleDeleteDeck,
    updateDeck, // todo сделать обработку
  }
}
