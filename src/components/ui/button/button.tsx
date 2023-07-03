import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonProps<T> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', fullWidth, as: Component = 'button', className, ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
