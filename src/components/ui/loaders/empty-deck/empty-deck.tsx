import { FC } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import s from './empty-deck.module.scss'

import { ArrowLeftIcon } from '@/assets'
import { Button, Typography } from '@/components'

export const EmptyDeck: FC = () => {
  const navigate = useNavigate()

  const classNames = {
    back: clsx(s.back),
    backArrow: clsx(s.content),
  }

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Button variant={'link'} onClick={navigateBack} className={classNames.back}>
        <Typography variant={'body2'} className={classNames.backArrow}>
          <ArrowLeftIcon /> Go back
        </Typography>
      </Button>
      <div className={s.wrapper}>
        <Typography variant={'large'}>Oops, there are no cards in your chosen deck.</Typography>

        <div data-js="astro" className={s.astronaut}>
          <div className={s.head} />
          <div className={`${s.arm} ${s.arm_left}`} />
          <div className={`${s.arm} ${s.arm_right}`} />
          <div className={s.body}>
            <div className={s.panel} />
          </div>
          <div className={`${s.leg} ${s.leg_left}`} />
          <div className={`${s.leg} ${s.leg_right}`} />
          <div className={s.schoolbag} />
        </div>
        <div className={s.elements}>
          <span className={s.el_1}></span>
          <span className={s.el_2}></span>
          <span className={s.el_3}></span>
          <span className={s.el_4}></span>
          <span className={s.el_5}></span>
          <span className={s.el_6}></span>
        </div>
      </div>
    </>
  )
}
