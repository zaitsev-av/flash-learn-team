import { FC, ReactNode, useState } from 'react'

import { clsx } from 'clsx'

import s from './grade.module.scss'

import { StarIcon, StarOutlineIcon } from '@/assets'

export type GradeType = 0 | 1 | 2 | 3 | 4 | 5
type GradeProps = {
  onClick: (id: GradeType) => void
  grade?: GradeType
}
export const Grade: FC<GradeProps> = ({ onClick, grade = 0 }) => {
  const [mouseOverId, setMouseOverId] = useState<number>(0)

  const starCount = 5
  const outlineStars = starCount - grade
  const stars = [
    ...Array(grade).fill(<StarIcon />),
    ...Array(outlineStars).fill(<StarOutlineIcon />),
  ]

  return (
    <div className={s.stars}>
      {stars.map((star, id) => {
        const style = clsx(id + 1 <= mouseOverId && s.overStar)
        const starClickHandle = () => {
          if (grade === 1 && mouseOverId === 1) {
            onClick(0)
          } else {
            onClick((id + 1) as GradeType)
          }
        }

        return (
          <StarItem
            key={id}
            id={id + 1}
            starType={star}
            onClick={starClickHandle}
            onMouseEnter={setMouseOverId}
            onMouseLeave={setMouseOverId}
            className={style}
          />
        )
      })}
    </div>
  )
}

type StarItemProps = {
  id: number
  starType: ReactNode
  className?: string
  onClick: (id: number) => void
  onMouseEnter: (id: number) => void
  onMouseLeave: (id: number) => void
}
export const StarItem: FC<StarItemProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
  starType,
  onClick,
  id,
}) => {
  const style = clsx(s.starItem, className)

  return (
    <div
      className={style}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(0)}
      onClick={() => onClick(id)}
    >
      {starType}
    </div>
  )
}
