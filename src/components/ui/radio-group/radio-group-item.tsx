import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from '@/components/ui/radio-group/custom-radio-group.module.scss'

export type RadioGroupItemPropsType = {
  label: string
  id: string
  value: string
}

export const RadioGroupItem: FC<RadioGroupItemPropsType> = ({ label, id, value }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioGroup.Item className={s.item} value={value} id={id}>
        <RadioGroup.Indicator className={s.indicator} />
      </RadioGroup.Item>
      <label className={s.label} htmlFor="r1">
        {label}
      </label>
    </div>
  )
}
