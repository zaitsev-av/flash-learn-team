import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './grade.module.scss'

import { StarIcon, StarOutlineIcon } from '@/assets'

export type GradeType = 0 | 1 | 2 | 3 | 4 | 5

type GradeProps = {
  grade: GradeType
}
export const Grade: FC<GradeProps> = ({ grade }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isFilled = i < grade
    const starType = isFilled ? <StarIcon /> : <StarOutlineIcon />

    return <StarItem key={i} id={i + 1} starType={starType} className={s.stars} />
  })

  return <div className={s.stars}>{stars}</div>
}

type StarItemProps = {
  id: number
  starType: ReactNode
  className?: string
}
export const StarItem: FC<StarItemProps> = ({ className, starType }) => {
  const style = clsx(s.starItem, className)

  return <div className={style}>{starType}</div>
}
