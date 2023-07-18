import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseURL } from '@/services/common/common.api.ts'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
  endpoints: build => {
    return {
      authMe: build.query<any, void>({
        query: () => {
          return {
            method: 'GET',
            url: `auth/me`,
          }
        },
      }),
      signUp: build.mutation({
        query: body => {
          return {
            method: 'POST',
            url: 'auth/sign-up',
            body,
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery } = authAPI
