import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets'
import { AvtarDropdown, Button } from '@/components'

export type HeaderPropsType = {
  data?: {
    name: string
    email: string
    avatar?: string
  } | null
  children?: ReactNode
  handleLogout: () => void
}
export const Header: FC<HeaderPropsType> = ({ children, handleLogout, data }) => {
  const classNames = {
    container: clsx(s.container, 'container'),
  }
  const isAuth = !!data

  return (
    <header className={s.wrapper}>
      <div className={classNames.container}>
        {children}
        <Link to={'/'}>
          <Logo />
        </Link>
        {isAuth && (
          <AvtarDropdown
            userName={data?.name ?? ''}
            userEmail={data?.email ?? ''}
            src={data?.avatar ?? undefined}
            onSignOut={handleLogout}
          />
        )}
        {!isAuth && <Button variant={'primary'}>Sign in</Button>}
      </div>
    </header>
  )
}
