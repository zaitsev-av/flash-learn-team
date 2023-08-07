import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '@/services/common/base-query-with-reauth.ts'

export const flashLearnApi = createApi({
  reducerPath: 'flashLearnApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Me', 'Decks', 'Cards', 'Learn'],
})
