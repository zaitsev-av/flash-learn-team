import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

// Импортируем экшены для обновления токена

// Базовый query
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: 'include',
})

// Создаем экземпляр мьютекса
const mutex = new Mutex()

// Определяем кастомный baseQuery
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // Ждем пока мьютекс освободится
  await mutex.waitForUnlock()

  // Делаем базовый запрос
  let result = await baseQuery(args, api, extraOptions)

  // Проверяем, если ошибка 401
  if (result.error && result.error.status === 401) {
    // Проверяем, не залочен ли уже мьютекс
    if (!mutex.isLocked()) {
      // Лочим мьютекс
      const release = await mutex.acquire()

      try {
        // Запрос на обновление токена
        const refreshResult = await baseQuery(
          {
            url: 'v1/auth/refresh-token',
            method: 'POST',
          },
          api,
          extraOptions
        )

        // Если токен обновлен
        if (refreshResult.meta?.response?.status === 201) {
          // Ставим новый токен
          // Повторяем запрос
          result = await baseQuery(args, api, extraOptions)
        } else {
          // Выходим из аккаунта
          await baseQuery(
            {
              url: 'v1/auth/logout',
              method: 'POST',
            },
            api,
            extraOptions
          )
        }
      } finally {
        // Разлочиваем мьютекс
        release()
      }
    } else {
      // Ждем пока мьютекс освободится
      await mutex.waitForUnlock()

      // Повторяем запрос
      result = await baseQuery(args, api, extraOptions)
    }
  }

  // Возвращаем результат
  return result
}

export { baseQueryWithReauth }
