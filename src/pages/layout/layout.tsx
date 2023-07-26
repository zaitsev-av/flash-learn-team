import { FC } from 'react'

import { clsx } from 'clsx'
import { Outlet, useNavigate } from 'react-router-dom'

import s from './layout.module.scss'

import { Header } from '@/components'
import { useAuthMeQuery, useLogoutMutation } from '@/services/auth'

export const Layout: FC = () => {
  const [logout] = useLogoutMutation()
  const { data } = useAuthMeQuery()
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

  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }

  return (
    <>
      <Header data={data} handleLogout={handleLogout} />
      <div className={classNames.wrapper}>
        <Outlet />
      </div>
    </>
  )
}
