import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '@/common'
import {
  useAuthMeQuery,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services'
import {
  selectGetCurrentPageQueryParams,
  selectGetItemsPerPageQueryParams,
} from '@/services/decks/decks-selectors.ts'
import { decksActions } from '@/services/decks/decks-slice.ts'
import { useFiltration } from '@/services/decks/hooks/useFiltration.ts'

export const useDecks = () => {
  const dispatch = useAppDispatch()
  const [updateDeck] = useUpdateDeckMutation()

  const [deleteDeck] = useDeleteDeckMutation()
  const { data: authData } = useAuthMeQuery()
  const isMe = authData?.id
  const page = useAppSelector(selectGetCurrentPageQueryParams)
  const pageSize = useAppSelector(selectGetItemsPerPageQueryParams)

  const setPage = (value: number) => {
    dispatch(decksActions.setQueryParams({ currentPage: value }))
  }

  const setPageSize = (pageSize: string) => {
    dispatch(decksActions.setQueryParams({ itemsPerPage: +pageSize }))
  }

  const {
    sort = '',
    setSearchQuery,
    setMyDecks,
    searchQuery,
    sliderValues,
    resetFilters,
    myDecks = '',
    debouncedSearchQuery = '',
    filterRange,
    setSliderValues,
    setFilterRange,
  } = useFiltration()

  const { data } = useGetDecksQuery({
    authorId: myDecks,
    currentPage: page ?? 1,
    itemsPerPage: pageSize ?? 10,
    name: debouncedSearchQuery,
    minCardsCount: filterRange[0].toString(),
    maxCardsCount: filterRange[1].toString(),
    orderBy: sort,
  })

  const totalCount = data?.pagination.totalItems ?? 0

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
    totalCount,
    setPage,
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
