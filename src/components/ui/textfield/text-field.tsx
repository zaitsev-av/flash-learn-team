import { ComponentProps, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { SearchIcon, ShowIcon } from '@/assets'
import HideIcon from '@/assets/icons/HideIcon.tsx'
import { Typography } from '@/components'

export type InputProps = {
  containerProps?: ComponentProps<'div'>
  title: string
  inputType: 'text' | 'password' | 'search'
  error?: string
  className?: string
} & React.ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, inputType, disabled, error, containerProps, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const color = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'
    const cNames = {
      input: clsx(
        s.input,
        inputType === 'password' && s.password,
        inputType === 'search' && s.search,
        error && s.inputError
      ),
      container: clsx(s.inputContainer),
      root: clsx(s.root, className, containerProps?.className),
      search: clsx(s.searchIcon),
      error: clsx(s.error),
      label: clsx(s.label),
    }
    const type = showPassword && inputType === 'password' ? 'text' : inputType

    const showHidePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    const rightIcons = inputType === 'password' && (
      <div className={s.rightIcon} onClick={showHidePassword}>
        {showPassword && !disabled ? <HideIcon color={color} /> : <ShowIcon color={color} />}
      </div>
    )

    const leftIcon = inputType === 'search' && (
      <div className={cNames.search}>{<SearchIcon color={color} />}</div>
    )

    const errorMessage = error && (
      <Typography variant="caption" color="error" unselectable="on">
        {error}
      </Typography>
    )

    return (
      <div className={cNames.root}>
        <Typography className={cNames.label} variant="body2" color="secondary" unselectable="on">
          {title}
          <div className={cNames.error}>{errorMessage}</div>
        </Typography>
        <div className={cNames.container}>
          <input ref={ref} disabled={disabled} className={cNames.input} type={type} {...rest} />
          {rightIcons}
          {leftIcon}
        </div>
      </div>
    )
  }
)
