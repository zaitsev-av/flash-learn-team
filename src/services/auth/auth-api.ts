import { createApi } from '@reduxjs/toolkit/query/react'

import { UserDataType, LoginArgs, UpdateUserDataType } from '@/services/auth/auth-types.ts'
import { baseQueryWithReauth } from '@/services/common/base-query-with-reauth.ts'

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Me'],
  endpoints: build => {
    return {
      authMe: build.query<UserDataType | null, void>({
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
      login: build.mutation<void, LoginArgs>({
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
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            authApi.util.updateQueryData('authMe', undefined, () => null)
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
      }),
      refreshToken: build.mutation<void, void>({
        query: () => {
          return {
            method: 'POST',
            url: 'v1/auth/refresh-token',
          }
        },
      }),
      updateUser: build.mutation<UserDataType, UpdateUserDataType>({
        query: body => {
          return {
            method: 'PATCH',
            url: 'v1/auth/me',
            body,
          }
        },
      }),
    }
  },
})

export const {
  useAuthMeQuery,
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
} = authApi
