import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './custom-radio-group.module.scss'

import { RadioGroupItem } from '@/components/ui/radio-group/radio-group-item.tsx'

type ItemType = {
  label: string
  id: string
  value: string
}

export type CustomRadioGroupPropsType = {
  items: ItemType[]
  onChange: () => void
}

export const CustomRadioGroup: FC<CustomRadioGroupPropsType> = props => {
  const { items, onChange } = props

  return (
    <form>
      <RadioGroup.Root className={s.root} defaultValue="default" onValueChange={onChange}>
        {items.map(el => {
          return <RadioGroupItem key={el.id} label={el.label} id={el.id} value={el.value} />
        })}
      </RadioGroup.Root>
    </form>
  )
}
