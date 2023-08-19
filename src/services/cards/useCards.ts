import { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
/*
import {
  useAuthMeQuery,
  useCreateCardMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetDeckQuery,
  useUpdateDeckMutation,
} from '@/services'*/

import { useAppDispatch, useAppSelector } from '@/common'
import {
  useAuthMeQuery,
  useCreateCardMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useUpdateDeckMutation,
} from '@/services'
import {
  selectGetAnswer,
  selectGetCurrentPage,
  selectGetId,
  selectGetItemsPerPage,
  selectGetOrderBy,
  selectGetQuestion,
} from '@/services/cards/cards-selectors.ts'
import { cardsAction } from '@/services/cards/cards-slice.ts'

export const useCards = () => {
  const dispatch = useAppDispatch()
  const deckId = useAppSelector(selectGetId)
  const question = useAppSelector(selectGetQuestion)
  const answer = useAppSelector(selectGetAnswer)
  const pageSize = useAppSelector(selectGetItemsPerPage)
  const page = useAppSelector(selectGetCurrentPage)
  const orderBy = useAppSelector(selectGetOrderBy)

  const navigate = useNavigate()
  const { id } = useParams()

  const { data: deckData } = useGetDeckQuery(deckId ?? '')

  const { data: userData } = useAuthMeQuery()
  const [createCard] = useCreateCardMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const [deleteDeck] = useDeleteDeckMutation()
  const setDeckId = (id: string) => {
    dispatch(cardsAction.setQueryParams({ id }))
  }
  const setAnswer = (value: string) => {
    dispatch(cardsAction.setQueryParams({ answer: value }))
  }
  const setQuestion = (value: string) => {
    dispatch(cardsAction.setQueryParams({ question: value }))
  }
  const setPageSize = (pageSize: string) => {
    dispatch(cardsAction.setQueryParams({ itemsPerPage: +pageSize }))
  }

  const setPage = (value: number) => {
    dispatch(cardsAction.setQueryParams({ currentPage: value }))
  }

  const handleCreateCard = (
    question: string,
    answer: string,
    questionImg?: string,
    answerImg?: string
  ) => {
    createCard({ id: deckId ?? '', question, answer, questionImg, answerImg })
  }

  const handleUpdateDeck = (name: string, isPrivate: boolean) => {
    updateDeck({ id: deckId ?? '', name, isPrivate })
  }

  const handleDeleteDeck = (id: string) => {
    deleteDeck({ id })
    navigate('/')
  }

  const deckName = deckData?.name ?? 'Friends Deck'
  const deckImg = deckData?.cover ?? ''
  const myId = userData?.id ?? ''
  const authorDeckId = deckData?.userId ?? ''
  const isMyDeck = myId === authorDeckId
  const totalCount = deckData?.cardsCount ?? 10

  useEffect(() => {
    setDeckId(id ?? '')
  }, [id])

  return {
    page,
    deckId,
    answer,
    orderBy,
    question,
    pageSize,
    totalCount,
    setDeckId,
    setAnswer,
    setQuestion,
    setPageSize,
    setPage,
    isMyDeck,
    deckImg,
    deckName,
    handleCreateCard,
    handleUpdateDeck,
    handleDeleteDeck,
  }
}
