import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type ButtonProps<T> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'outlined' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: React.ForwardedRef<any>
) => {
  const {
    variant = 'primary',
    fullWidth,
    as: Component = 'button',
    disabled,
    className,
    ...rest
  } = props
  // const isDisabled = clsx(className, disabled && s.disabledLink)

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
