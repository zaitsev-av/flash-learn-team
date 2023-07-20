import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { useAuthMeQuery } from '@/services/auth'

export const useAuth = () => {
  const { isError } = useAuthMeQuery()
  const location = useLocation()
  const navigate = useNavigate()
  const isAuth = isError && location.pathname !== '/sign-in'

  useEffect(() => {
    if (isAuth) {
      navigate('/sign-in')
    } else {
      navigate('/')
    }
  }, [isAuth])
}
