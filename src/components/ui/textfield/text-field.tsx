import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import HideIcon from '@/assets/icons/HideIcon.tsx'
import SearchIcon from '@/assets/icons/SearchIcon.tsx'
import ShowIcon from '@/assets/icons/ShowIcon.tsx'
import { Typography } from '@/components'

type InputProps = {
  title: string
  inputType: 'text' | 'password' | 'search'
  error?: string
} & React.ComponentProps<'input'>

export const TextField: FC<InputProps> = ({ title, inputType, disabled, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)
  const color = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'
  const cNames = {
    input: clsx(
      s.input,
      inputType === 'password' && s.password,
      inputType === 'search' && s.search
    ),
    container: clsx(s.inputContainer),
    root: clsx(s.root),
    search: clsx(s.searchIcon),
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

  const leftIcon = (
    <div className={cNames.search}>{inputType === 'search' && <SearchIcon color={color} />}</div>
  )

  const errorMessage = error && (
    <Typography variant="caption" color="error" unselectable="on">
      {error}
    </Typography>
  )

  return (
    <div className={cNames.root}>
      <Typography variant="body2" color="secondary" unselectable="on">
        {title}
      </Typography>
      <div className={cNames.container}>
        <input disabled={disabled} className={cNames.input} type={type} {...rest} />
        {rightIcons}
        {leftIcon}
      </div>
      {errorMessage}
    </div>
  )
}
