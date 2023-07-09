import { FC } from 'react'

import * as SliderRDX from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

import { Typography } from '@/components'

export type CustomSliderPropsType = {
  label?: string
  minValue: number
  maxValue: number
  onValueCommit: (values: [number, number]) => void
  onChange: (values: [number, number]) => void
  className?: string
  value: [number, number]
  step?: number
}

export const Slider: FC<CustomSliderPropsType> = props => {
  const { maxValue, minValue, onValueCommit, label, onChange, className, value, step = 1 } = props
  const classNames = {
    container: clsx(s.container, className),
  }

  return (
    <div className={classNames.container}>
      <label className={s.label}>
        <Typography variant={'body2'}>{label}</Typography>{' '}
      </label>
      <form className={s.wrapper}>
        <div className={s.values}>{minValue}</div>
        <SliderRDX.Root
          value={value}
          className={s.root}
          defaultValue={[minValue, maxValue]}
          max={100}
          step={step}
          onValueCommit={onValueCommit}
          onValueChange={onChange}
        >
          <SliderRDX.Track className={s.track}>
            <SliderRDX.Range className={s.range} />
          </SliderRDX.Track>
          <SliderRDX.Thumb className={s.thumb} aria-label="Volume" />
          <SliderRDX.Thumb className={s.thumb} aria-label="Volume" />
        </SliderRDX.Root>
        <div className={s.values}>{maxValue}</div>
      </form>
    </div>
  )
}
