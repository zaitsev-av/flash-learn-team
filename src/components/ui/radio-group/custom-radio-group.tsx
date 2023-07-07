import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './custom-radio-group.module.scss'

import { RadioGroupItem } from '@/components/ui/radio-group/radio-group-item.tsx'

type ItemType = {
  label: string
  id: string
  value: string
}

export type CustomRadioGroupPropsType = {
  items: ItemType[]
  className?: string
  onChange: () => void
}

export const CustomRadioGroup: FC<CustomRadioGroupPropsType> = props => {
  const { items, onChange, className } = props
  const classNames = {
    root: clsx(s.wrapper, className),
  }

  return (
    <form>
      <RadioGroup.Root className={classNames.root} defaultValue="default" onValueChange={onChange}>
        {items.map(el => {
          return <RadioGroupItem key={el.id} label={el.label} id={el.id} value={el.value} />
        })}
      </RadioGroup.Root>
    </form>
  )
}
