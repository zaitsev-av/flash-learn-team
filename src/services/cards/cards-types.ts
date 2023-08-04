import { PaginationType } from '@/services'

export type CardsItem = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}

export type CardsResponseType = {
  items: CardsItem[]
  pagination: PaginationType
}
