import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRDX from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/assets'

type CheckboxProps = {
  left?: boolean
  label?: string
  className?: string
  onChange?: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox = (props: CheckboxProps) => {
  const { checked, left, label, disabled, onChange } = props
  const checkColor = disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'

  const cNames = {
    container: clsx(s.container, left && s.left),
    stateLayer: clsx({ [s.disabled]: disabled, [s.stateLayer]: !disabled }),
    root: s.CheckboxRoot,
    indicator: s.CheckboxIndicator,
    label: clsx(s.label, disabled && s.disabledLabel),
  }

  return (
    <form>
      <div className={cNames.container}>
        <div className={cNames.stateLayer}>
          <CheckboxRDX.Root
            onCheckedChange={onChange}
            className={cNames.root}
            checked={checked}
            disabled={disabled}
          >
            <CheckboxRDX.Indicator className={cNames.indicator}>
              <CheckedIcon color={checkColor} />
            </CheckboxRDX.Indicator>
          </CheckboxRDX.Root>
        </div>
        <label className={cNames.label}>{label}</label>
      </div>
    </form>
  )
}
