import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseURL } from '@/services/common/common.api.ts'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
  endpoints: build => {
    return {
      authMe: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: 'auth/me',
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery } = authAPI
