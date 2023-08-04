import { UserDataType } from '@/services'

export type GetDecksType = {
  minCardsCount: string
  maxCardsCount: string
  name: string
  authorId: string
  orderBy: string
  currentPage: number
  itemsPerPage: number
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
  rating: number
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

export type GetCardsWithPagination = {
  id: string
  answer: string
  question?: string
  orderBy: string
} & Pick<PaginationType, 'currentPage' | 'itemsPerPage'>
