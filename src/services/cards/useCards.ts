import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { Sort } from '@/components'
import {
  useAuthMeQuery,
  useCreateCardMutation,
  useGetCardsQuery,
  useGetDeckQuery,
  useUpdateDeckMutation,
} from '@/services'

export const useCards = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const navigate = useNavigate()
  const { id } = useParams()

  const navigateBack = () => {
    navigate(-1)
  }
  const deckId = id || ''
  const { data: deckData } = useGetDeckQuery(deckId)
  const { data: userData } = useAuthMeQuery()
  const [createCard] = useCreateCardMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
    answer: '',
    question: '',
    itemsPerPage: +pageSize,
    currentPage: page,
    orderBy: '',
  })

  const handleCreateCard = (question: string, answer: string) => {
    createCard({ id: deckId, question, answer })
  }

  const handleUpdateDeck = (name: string, isPrivate: boolean) => {
    updateDeck({ id: deckId, name, isPrivate })
  }

  const deckName = deckData?.name ?? 'Friends Deck'
  const deckImg = deckData?.cover ?? ''
  const myId = userData?.id ?? ''
  const authorDeckId = deckData?.userId ?? ''
  const isMyDeck = myId === authorDeckId

  return {
    isMyDeck,
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
    handleCreateCard,
    handleUpdateDeck,
  }
}
