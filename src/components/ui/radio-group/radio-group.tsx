import { FC } from 'react'

import * as RadioGroupRDX from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { RadioGroupItem } from '@/components/ui/radio-group/radio-group-item.tsx'

export type RadioGroupItemType = {
  label: string
  id: string
  value: string
}

type RadioGroupPropsType = {
  items: RadioGroupItemType[]
  className?: string
  onChange: (value: string) => void
  value: string
}

export const RadioGroup: FC<RadioGroupPropsType> = props => {
  const { value, items, onChange, className } = props
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <form>
      <RadioGroupRDX.Root
        value={value}
        className={classNames.root}
        defaultValue="default"
        onValueChange={onChange}
      >
        {items.map(el => {
          return <RadioGroupItem key={el.id} label={el.label} id={el.id} value={el.value} />
        })}
      </RadioGroupRDX.Root>
    </form>
  )
}
