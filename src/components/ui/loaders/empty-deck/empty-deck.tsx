import { FC } from 'react'

import s from './empty-deck.module.scss'

import { Typography } from '@/components'

export const EmptyDeck: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.box_of_star1}>
        <div className={`${s.star} ${s.star_position1}`} />
        <div className={`${s.star} ${s.star_position2}`} />
        <div className={`${s.star} ${s.star_position3}`} />
        <div className={`${s.star} ${s.star_position4}`} />
        <div className={`${s.star} ${s.star_position5}`} />
        <div className={`${s.star} ${s.star_position6}`} />
        <div className={`${s.star} ${s.star_position7}`} />
      </div>
      <Typography variant={'large'}>Oops, there are no cards in your chosen deck.</Typography>
      <div className={s.box_of_star2}>
        <div className={`${s.star} ${s.star_position1}`} />
        <div className={`${s.star} ${s.star_position2}`} />
        <div className={`${s.star} ${s.star_position3}`} />
        <div className={`${s.star} ${s.star_position4}`} />
        <div className={`${s.star} ${s.star_position5}`} />
        <div className={`${s.star} ${s.star_position6}`} />
        <div className={`${s.star} ${s.star_position7}`} />
      </div>
      <div className={s.box_of_star3}>
        <div className={`${s.star} ${s.star_position1}`} />
        <div className={`${s.star} ${s.star_position2}`} />
        <div className={`${s.star} ${s.star_position3}`} />
        <div className={`${s.star} ${s.star_position4}`} />
        <div className={`${s.star} ${s.star_position5}`} />
        <div className={`${s.star} ${s.star_position6}`} />
        <div className={`${s.star} ${s.star_position7}`} />
      </div>
      <div className={s.box_of_star4}>
        <div className={`${s.star} ${s.star_position1}`} />
        <div className={`${s.star} ${s.star_position2}`} />
        <div className={`${s.star} ${s.star_position3}`} />
        <div className={`${s.star} ${s.star_position4}`} />
        <div className={`${s.star} ${s.star_position5}`} />
        <div className={`${s.star} ${s.star_position6}`} />
        <div className={`${s.star} ${s.star_position7}`} />
      </div>
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
    </div>
  )
}
