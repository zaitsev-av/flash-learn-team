import { Navigate, Outlet } from 'react-router-dom'

import { InitialLoader } from '@/components/ui/loaders/initial-loader/initial-loader.tsx'
import { useAuthMeQuery } from '@/services/auth'

export const PrivateRoute = () => {
  const { data, isLoading } = useAuthMeQuery()

  /* useAuth()*/

  if (isLoading) {
    return <InitialLoader />
  }

  return data ? <Outlet /> : <Navigate to="/sign-in" />
}
