import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { useAuthMeQuery } from '@/services/auth'

export const useAuth = () => {
  const { data, error, isError } = useAuthMeQuery()
  const location = useLocation()
  const navigate = useNavigate()
  const isAuth = isError && location.pathname !== '/sign-in'

  console.log(data)
  console.log(error)

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])
}
