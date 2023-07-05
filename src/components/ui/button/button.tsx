import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import s from './button.module.scss'

type ButtonProps<T> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: React.ForwardedRef<any>
) => {
  const { variant = 'primary', fullWidth, as: Component = 'button', className, ...rest } = props

  return (
    <Component
      ref={ref}
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}

export default forwardRef(Button)
