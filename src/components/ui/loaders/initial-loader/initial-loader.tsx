import { FC } from 'react'

import { clsx } from 'clsx'

import s from './initial-loader.module.scss'
export const InitialLoader: FC = () => {
  const classNames = {
    container: clsx(s.container),
    wrapper: clsx(s.spinner),
    spinner: clsx(s.spinner1),
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.wrapper}>
        <div className={classNames.spinner}></div>
      </div>
    </div>
  )
}
