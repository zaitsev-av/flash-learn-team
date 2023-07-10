import { FC } from 'react'

import * as CheckboxRDX from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/assets'

export type CheckboxProps = {
  left?: boolean
  label?: string
  className?: string
  onChange?: (checked: boolean) => void
  checked?: boolean
  disabled?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  left,
  label,
  disabled,
  onChange,
}) => {
  const cNames = {
    wrapper: clsx(s.wrapper, left && s.left, className),
    stateLayer: clsx(s.stateLayer, disabled && s.disabled),
    root: clsx(s.checkboxRoot),
    indicator: clsx(s.checkboxIndicator),
    label: clsx(s.label, disabled && s.disabledLabel),
  }

  return (
    <div className={cNames.wrapper}>
      <label className={cNames.stateLayer} tabIndex={0} htmlFor="c1">
        <CheckboxRDX.Root
          onCheckedChange={onChange}
          className={cNames.root}
          checked={checked}
          disabled={disabled}
          id="c1"
        >
          <CheckboxRDX.Indicator className={cNames.indicator}>
            <CheckedIcon />
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
      </label>
      <label className={cNames.label} htmlFor="c1">
        {label}
      </label>
    </div>
  )
}
