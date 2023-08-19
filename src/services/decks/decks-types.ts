import { UserDataType } from '@/services'

export type GetDecksType = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type DeckAuthorType = Pick<UserDataType, 'id' | 'name'>

export type ItemsType = {
  author: DeckAuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  grade: number
  created: string
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type DecksResponseType = {
  items: ItemsType[]
  pagination: PaginationType
  maxCardsCount: number
}

export type UpdateDeckResponseType = {
  id: string
  name: string
  cover?: string
  isPrivate: boolean
}

export type CardResponseType = {
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
  grade: number
  created: string
  updated: string
}

export type CardsItem = Omit<CardResponseType, 'userId'>

export type CardsResponseType = {
  items: CardsItem[]
  pagination: PaginationType
}

export type GetCardsRequestType = {
  id: string
  answer: string
  question?: string
  orderBy: string
} & Pick<PaginationType, 'currentPage' | 'itemsPerPage'>

export type CreateCardRequestType = {
  id: string
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
}

export type UpdateCardGradeType = {
  id: string
  cardId: string
  grade: number
}

export type DeleteDeckArgs = Pick<ItemsType, 'id'>
