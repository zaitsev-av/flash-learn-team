import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './custom-slider.module.scss'

export const CustomSlider: FC = () => {
  return (
    <form className={s.wrapper}>
      <div className={s.values}>10</div>
      <Slider.Root className={s.root} defaultValue={[0, 70]} max={100} step={1}>
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
      </Slider.Root>
      <div className={s.values}>10</div>
    </form>
  )
}
