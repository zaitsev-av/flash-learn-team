import { FC } from 'react'

import { clsx } from 'clsx'
import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import Logo from '@/assets/Flash_learn__.png'
import { AvtarDropdown, Button } from '@/components'

export type HeaderPropsType = {
  data?: {
    name: string
    email: string
    avatar?: string
  } | null
  logout: () => void
}
export const Header: FC<HeaderPropsType> = ({ logout, data }) => {
  const classNames = {
    container: clsx(s.container, 'container'),
  }
  const navigate = useNavigate()
  const isAuth = !!data

  return (
    <header className={s.wrapper}>
      <div className={classNames.container}>
        <Link to={'/'}>
          <img src={Logo} alt={'logo'} width={120} height={60} />
        </Link>
        {isAuth && (
          <AvtarDropdown
            userName={data?.name ?? ''}
            userEmail={data?.email ?? ''}
            src={data?.avatar ?? undefined}
            onSignOut={logout}
          />
        )}
        {!isAuth && (
          <Button variant={'primary'} onClick={() => navigate('/sign-in')}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
