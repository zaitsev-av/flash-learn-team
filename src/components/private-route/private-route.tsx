import { Outlet } from 'react-router-dom'

import { InitialLoader } from '@/components/ui/loaders/initial-loader/initial-loader.tsx'
import { useAuthMeQuery } from '@/services/auth'
import { useAuth } from '@/services/auth/hooks/useAuth.ts'

export const PrivateRoute = () => {
  const { isLoading } = useAuthMeQuery()

  useAuth()

  if (isLoading) {
    return <InitialLoader />
  }

  return <Outlet />
}
