import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './custom-slider.module.scss'

export type CustomSliderPropsType = {
  // label?: string
  minValue: number
  maxValue: number
  onValueCommit: (values: [number, number]) => void
  onChange: (values: [number, number]) => void
}

export const CustomSlider: FC<CustomSliderPropsType> = props => {
  const { maxValue, minValue, onValueCommit, onChange } = props

  return (
    <form className={s.wrapper}>
      <div className={s.values}>{minValue}</div>
      <Slider.Root
        className={s.root}
        defaultValue={[minValue, maxValue]}
        max={100}
        step={1}
        onValueCommit={onValueCommit}
        onValueChange={onChange}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
      </Slider.Root>
      <div className={s.values}>{maxValue}</div>
    </form>
  )
}
