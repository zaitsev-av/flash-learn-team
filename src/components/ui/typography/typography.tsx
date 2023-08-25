import { ComponentPropsWithoutRef, ElementType, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error1'
    | 'error2'
  children?: ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'error' | 'inherit' | 'disabled'
}

export const Typography = forwardRef(
  <T extends ElementType>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
    ref: any
  ) => {
    const {
      variant = 'body1',
      as: Component = 'span',
      color = 'inherit',
      unselectable,
      className,
      ...rest
    } = props
    const classNames = clsx(
      `${className} ${s[variant]} ${s[color]}`,
      unselectable === 'on' && s.unselectable
    )

    return <Component className={classNames} ref={ref} {...rest} />
  }
)
