import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ArgsSignUpType } from '@/services/auth/auth.api.types.ts'
import { baseURL } from '@/services/common/common.api.ts'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: build => {
    return {
      me: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: 'auth/me',
            params: {},
          }
        },
      }),
      signUp: build.mutation<any, ArgsSignUpType>({
        query: ({ email, password }) => {
          return {
            method: 'POST',
            url: 'auth/sign-up',
            body: { email, password },
          }
        },
      }),
    }
  },
})

export const { useMeQuery, useSignUpMutation } = authAPI
