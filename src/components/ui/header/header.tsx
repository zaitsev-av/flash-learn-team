import { ReactNode } from 'react'

import s from './header.module.scss'

export type HeaderPropsType = {
  children: ReactNode
}
export const Header: React.FC<HeaderPropsType> = ({ children }) => {
  return (
    <header className={s.wrapper}>
      <div className={s.container}>{children}</div>
    </header>
  )
}
