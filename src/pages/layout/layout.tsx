import { FC } from 'react'

import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'

import { Header } from '@/components'
import { useAuthMeQuery, useLogoutMutation } from '@/services/auth'

export const Layout: FC = () => {
  const [logout] = useLogoutMutation()
  const { data } = useAuthMeQuery()

  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }

  return (
    <div>
      <Header data={data} logout={logout} />
      <div className={classNames.wrapper}>
        <Outlet />
      </div>
    </div>
  )
}
