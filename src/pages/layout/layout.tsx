import { FC } from 'react'

import { clsx } from 'clsx'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { Button, Header } from '@/components'
import { Cards } from '@/pages/cards/cards.tsx'

export const Layout: FC = () => {
  const classNames = {
    wrapper: clsx(s.wrapper, 'container'),
  }

  return (
    <>
      <Header>
        <Logo />
        <Button variant={'primary'}>Sign In</Button>
      </Header>
      <div className={classNames.wrapper}>
        <Cards userId={'1'} />
      </div>
    </>
  )
}
