import { FC } from 'react'

import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { AvtarDropdown, Header } from '@/components'
import { useAuthMeQuery } from '@/services/auth'

export const Layout: FC = () => {
  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }
  const { data } = useAuthMeQuery()

  // const navigate = useNavigate()
  // const location = useLocation()
  //
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
          onSignOut={() => {}}
        />
      </Header>
      <div className={classNames.wrapper}>
        <Outlet />
      </div>
    </>
  )
}
