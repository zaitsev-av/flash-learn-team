import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'outlined' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ForwardedRef<any>
) => {
  const {
    variant = 'primary',
    fullWidth,
    as: Component = 'button',
    disabled,
    className,
    ...rest
  } = props

  const classNames = {
    root: clsx(
      variant === 'primary' && s.primary,
      variant === 'secondary' && s.secondary,
      variant === 'outlined' && s.outlined,
      variant === 'link' && s.link,
      disabled && s.disabledLink,
      fullWidth && s.fullWidth,
      className
    ),
  }

  return <Component ref={ref} disabled={disabled} className={classNames.root} {...rest} />
}

export default forwardRef(Button)
