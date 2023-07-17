import { FC } from 'react'

import { clsx } from 'clsx'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { AvtarDropdown, Header } from '@/components'
import { Cards } from '@/pages/cards'
import { useAuthMeQuery } from '@/services/auth/auth.api.ts'

export const Layout: FC = () => {
  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }
  const { data } = useAuthMeQuery('')

  console.log(data)

  return (
    <>
      <Header>
        <Logo />
        <AvtarDropdown userName={'blabla'} userEmail={'asdadfasdf@dvsag'} onSignOut={() => {}} />
      </Header>
      <div className={classNames.wrapper}>
        <Cards userId={'1'} />
      </div>
    </>
  )
}
