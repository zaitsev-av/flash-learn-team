import { FC } from 'react'

import { clsx } from 'clsx'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { AvtarDropdown, Header } from '@/components'
import { useAuthMeQuery } from '@/services/auth/auth.api.ts'

export const Layout: FC = () => {
  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }
  const { data, error, isError } = useAuthMeQuery()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(data)
  console.log(error)
  if (isError && location.pathname !== '/login') navigate('/login')

  return (
    <>
      <Header>
        <Logo />
        <AvtarDropdown userName={'blabla'} userEmail={'asdadfasdf@dvsag'} onSignOut={() => {}} />
      </Header>
      <div className={classNames.wrapper}>
        <Outlet />
      </div>
    </>
  )
}
