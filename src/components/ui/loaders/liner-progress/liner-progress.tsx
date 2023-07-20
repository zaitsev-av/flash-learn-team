import { FC } from 'react'

// import { clsx } from 'clsx'

import s from './liner-progress.module.scss'
export const LinerProgress: FC = () => {
  // const classNames = {
  //   wrapper: clsx(s.wrapper),
  //   loader: clsx(s.loader),
  // }

  return (
    <div className={s.wrapper}>
      <div className={s.loader}></div>
    </div>
  )
}
