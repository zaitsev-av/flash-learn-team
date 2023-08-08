import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/app/store.ts'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
