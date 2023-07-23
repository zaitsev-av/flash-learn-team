import { createApi } from '@reduxjs/toolkit/query/react'

import { AuthMeResponseType, LoginArgs } from '@/services/auth/auth-types.ts'
import { baseQueryWithReauth } from '@/services/common/base-query-with-reauth.ts'

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Me'],
  endpoints: build => {
    return {
      authMe: build.query<AuthMeResponseType, void>({
        query: () => {
          return {
            method: 'GET',
            url: `v1/auth/me`,
          }
        },
        providesTags: ['Me'],
      }),
      signUp: build.mutation({
        query: body => {
          return {
            method: 'POST',
            url: 'v1/auth/sign-up',
            body,
          }
        },
      }),
      login: build.mutation<{ accessToken: string }, LoginArgs>({
        query: body => {
          return {
            method: 'POST',
            url: 'v1/auth/login',
            body,
          }
        },
        invalidatesTags: ['Me'],
      }),
      logout: build.mutation<void, void>({
        query: () => {
          return {
            method: 'POST',
            url: 'v1/auth/logout',
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery, useSignUpMutation, useLoginMutation, useLogoutMutation } = authApi
