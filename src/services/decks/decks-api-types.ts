export type GetDecksType = {
  minCardsCount: string
  maxCardsCount: string
  name: string
  authorId: string
  orderBy: string
  currentPage: number
  itemsPerPage: number
}

export type AuthorType = {
  id: string
  name: string
}

export type ItemsType = {
  author: AuthorType
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
