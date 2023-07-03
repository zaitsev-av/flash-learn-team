import { FC, ReactNode } from 'react'

import s from './card.module.scss'

type CardPropsType = {
  children: ReactNode
}
export const Card: FC<CardPropsType> = ({ children }) => {
  return <div className={s.card}>{children}</div>
}
