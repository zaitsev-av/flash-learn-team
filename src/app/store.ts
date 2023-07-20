import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authAPI } from '@/services/auth/auth.api.ts'

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  // Добавляем middleware для использования дополнительных функций rtk-query, таких как кэширование, инвалидация и pooling.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware),
})

/**
 *Метод setupListeners, подключает слушатели событий фокуса
 *(refetchOnFocus) и повторного подключения (refetchOnReconnect ),
 *чтобы автоматически перезагружать данные при возвращении на страницу
 *или восстановлении подключения
 */
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
