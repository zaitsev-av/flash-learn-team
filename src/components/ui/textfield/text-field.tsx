import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { SearchIcon, ShowIcon } from '@/assets'
import HideIcon from '@/assets/icons/HideIcon.tsx'
import { Typography } from '@/components'

export type InputProps = {
  containerProps?: ComponentProps<'div'>
  title?: string
  inputType: 'text' | 'password' | 'search'
  error?: string
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, inputType, disabled, error, containerProps, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const color = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'
    const classNames = {
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
      <div className={classNames.search}>{<SearchIcon color={color} />}</div>
    )

    const errorMessage = error && (
      <Typography variant="caption" color="error" unselectable="on">
        {error}
      </Typography>
    )

    return (
      <div className={classNames.root}>
        <Typography
          className={classNames.label}
          variant="body2"
          color="secondary"
          unselectable="on"
        >
          {title}
          <div className={classNames.error}>{errorMessage}</div>
        </Typography>
        <div className={classNames.container}>
          <input ref={ref} disabled={disabled} className={classNames.input} type={type} {...rest} />
          {rightIcons}
          {leftIcon}
        </div>
      </div>
    )
  }
)
