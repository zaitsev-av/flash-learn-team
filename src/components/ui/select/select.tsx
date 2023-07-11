import { FC } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRDX from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { SelectItem } from '@/components/ui/select/select-item.tsx'
import { Typography } from '@/components/ui/typography'

export type SelectPropsType = {
  items: string[]
  disabled?: boolean
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  width?: number | string
  className?: string
}
export const Select: FC<SelectPropsType> = props => {
  const {
    className,
    disabled,
    items,
    label,
    onChange,
    placeholder = items[0],
    width = '100%',
  } = props

  const classNames = {
    label: clsx(s.label, disabled && s.disabled),
    trigger: clsx(s.trigger, className),
    itemClass: clsx(s.item, className),
    icon: clsx(s.icon),
    content: clsx(s.content),
  }

  return (
    <div>
      <label className={classNames.label} aria-disabled={disabled}>
        <Typography variant={'body1'}>{label}</Typography>
      </label>
      <SelectRDX.Root disabled={disabled} onValueChange={onChange}>
        <SelectRDX.Trigger className={classNames.trigger} style={{ width: `${width}px` }}>
          <SelectRDX.Value placeholder={<Typography variant={'body1'}>{placeholder}</Typography>} />
          <SelectRDX.Icon
            className={classNames.icon}
            data-state={disabled ? 'disabled' : 'not-disabled'}
          >
            <ChevronDownIcon />
          </SelectRDX.Icon>
        </SelectRDX.Trigger>
        <SelectRDX.Portal>
          <SelectRDX.Content
            className={classNames.content}
            position={'popper'}
            side={'bottom'}
            sideOffset={0}
          >
            <SelectRDX.Viewport>
              {items.map((el, i) => {
                return <SelectItem key={i} value={el} className={classNames.itemClass} />
              })}
            </SelectRDX.Viewport>
          </SelectRDX.Content>
        </SelectRDX.Portal>
      </SelectRDX.Root>
    </div>
  )
}
