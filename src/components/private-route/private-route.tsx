import { Outlet } from 'react-router-dom'

import { useAuth } from '@/services/auth/hooks/useAuth.ts'

export const PrivateRoute = () => {
  useAuth()

  return <Outlet />
}
