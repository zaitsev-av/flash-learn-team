import { FC } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './custom-select.module.scss'

import { SelectItem } from '@/components/ui/select/select-item.tsx'
import { Typography } from '@/components/ui/typography'

export type CustomSelectPropsType = {
  items: string[]
  disabled?: boolean
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  width?: number | string
}
export const CustomSelect: FC<CustomSelectPropsType> = props => {
  const { disabled, items, label, onChange, placeholder = items[0], width = '' } = props

  return (
    <div>
      <label className={`${s.label} ${disabled && s.disabled}`} aria-disabled={disabled}>
        <Typography variant={'body1'}>{label}</Typography>
      </label>
      <Select.Root disabled={disabled} onValueChange={onChange}>
        <Select.Trigger className={s.trigger} style={{ width: `${width}px` }}>
          <Select.Value placeholder={<Typography variant={'body2'}>{placeholder}</Typography>} />
          <Select.Icon className={s.icon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content} position={'popper'} side={'bottom'} sideOffset={0}>
            <Select.Viewport>
              {items.map((el, i) => {
                return <SelectItem key={i} value={el} className={s.item} />
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
