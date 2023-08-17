import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { flashLearnApi } from '@/services'
import { cardsReducer } from '@/services/cards/cards-slice.ts'
import { decksReducer } from '@/services/decks/decks-slice.ts'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    decks: decksReducer,
    [flashLearnApi.reducerPath]: flashLearnApi.reducer,
  },
  // Добавляем middleware для использования дополнительных функций rtk-query, таких как кэширование, инвалидация и pooling.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashLearnApi.middleware),
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
