import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { Sort } from '@/components'
import { useGetCardsQuery } from '@/services'

export const useCards = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const navigate = useNavigate()
  const { id } = useParams()
  //userId - только для тестирования функционала
  const navigateBack = () => {
    navigate(-1)
  }
  const deckId = id || ''

  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
    answer: '',
    question: '',
    itemsPerPage: +pageSize,
    currentPage: page,
    orderBy: '',
  })

  //todo заменить переменную packName на имя колоды
  const deckName = "Friend's pack"

  return {
    cardsData,
    sort,
    page,
    deckId,
    pageSize,
    deckName,
    navigateBack,
    setSort,
    setPage,
    setPageSize,
  }
}
