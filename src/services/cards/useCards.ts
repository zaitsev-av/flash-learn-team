import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { Sort } from '@/components'
import { useGetCardsQuery, useGetDeckQuery } from '@/services'

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
  const { data: deckData } = useGetDeckQuery(deckId)

  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
    answer: '',
    question: '',
    itemsPerPage: +pageSize,
    currentPage: page,
    orderBy: '',
  })

  const deckName = deckData?.name ?? 'Friends Deck'
  const deckImg = deckData?.cover ?? ''

  return {
    cardsData,
    deckImg,
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
