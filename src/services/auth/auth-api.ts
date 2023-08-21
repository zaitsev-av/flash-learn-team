import { LoginArgs, RecoveryPassword, UserDataType } from '@/services/auth/auth-types.ts'
import { flashLearnApi } from '@/services/flash-learn-api.ts'

export const authApi = flashLearnApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<UserDataType | null, void>({
        query: () => {
          return {
            method: 'GET',
            url: `v1/auth/me`,
          }
        },
        providesTags: ['Me'],
      }),
      updateUser: builder.mutation<UserDataType, FormData>({
        query: body => {
          return {
            method: 'PATCH',
            url: 'v1/auth/me',
            body,
          }
        },
      }),
      login: builder.mutation<void, LoginArgs>({
        query: body => {
          return {
            method: 'POST',
            url: 'v1/auth/login',
            body,
          }
        },
        invalidatesTags: ['Me'],
      }),
      logout: builder.mutation<void, void>({
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
      signUp: builder.mutation({
        query: body => {
          return {
            method: 'POST',
            url: 'v1/auth/sign-up',
            body,
          }
        },
      }),
      refreshToken: builder.mutation<void, void>({
        query: () => {
          return {
            method: 'POST',
            url: 'v1/auth/refresh-token',
          }
        },
      }),
      recoverPassword: builder.mutation<void, RecoveryPassword>({
        query: ({ email, html, subject }) => {
          return {
            method: 'POST',
            url: 'v1/auth/recover-password',
            body: { email, html, subject },
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
  useRecoverPasswordMutation,
} = authApi
