import { FC } from 'react'

import { clsx } from 'clsx'
//todo uncomment
//import { useNavigate } from 'react-router-dom'

import s from './page-not-found.module.scss'

import { Page404 } from '@/assets'
import { Button, Typography } from '@/components'

export const PageNotFound: FC = () => {
  //todo указать путь
  // const navigate = useNavigate()
  const classNames = {
    wrapper: clsx(s.wrapper),
    container: clsx(s.container),
    message: clsx(s.message),
    btn: clsx(s.btn),
  }

  return (
    <div className={classNames.wrapper}>
      <Page404 />
      <div className={classNames.container}>
        <Typography variant={'body1'} className={classNames.message}>
          Sorry! Page not found!
        </Typography>
        <Button
          variant={'primary'}
          className={classNames.btn}
          //todo uncomment
          // onClick={() => navigate('PATH')}
        >
          Back to home page
        </Button>
      </div>
    </div>
  )
}
