import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderPropsType = {
  children: ReactNode
}
export const Header: React.FC<HeaderPropsType> = ({ children }) => {
  const cNames = {
    container: clsx(s.container, 'container'),
  }

  return (
    <header className={s.wrapper}>
      <div className={cNames.container}>{children}</div>
    </header>
  )
}
