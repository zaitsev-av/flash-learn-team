import { FC, PropsWithChildren } from 'react'

import s from './page.module.scss'
type Props = PropsWithChildren<{
  mt?: number
}>
export const Page: FC<Props> = ({ children, mt = '2rem' }) => {
  return (
    <div className={s.wrapper} style={{ marginTop: mt }}>
      {children}
    </div>
  )
}
