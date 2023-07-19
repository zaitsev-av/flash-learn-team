import { FC } from 'react'

import { clsx } from 'clsx'
import { Outlet, useNavigate } from 'react-router-dom'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { AvtarDropdown, Header } from '@/components'
import { useAuthMeQuery, useLogoutMutation } from '@/services/auth'

export const Layout: FC = () => {
  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }
  const { data } = useAuthMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const handleLogout = async () => {
    const res = await logout()

    try {
      console.log(res)
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)
  // console.log(error)
  // if (isError && location.pathname !== '/sign-in') navigate('/sign-in')

  return (
    <>
      <Header>
        <Logo />
        <AvtarDropdown
          userName={data?.name ?? ''}
          userEmail={data?.email ?? ''}
          src={data?.avatar ?? undefined}
          onSignOut={handleLogout}
        />
      </Header>
      <div className={classNames.wrapper}>
        <Outlet />
      </div>
    </>
  )
}
