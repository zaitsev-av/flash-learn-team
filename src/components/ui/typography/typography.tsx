import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

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
export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    variant = 'div',
    as: Component = 'span',
    color = 'inherit',
    unselectable,
    className,
    ...rest
  } = props
  const cName = clsx(
    `${className} ${s[variant]} ${s[color]}`,
    unselectable === 'on' && s.unselectable
  )

  //TODO посмотреть стили
  return <Component className={cName} {...rest} />
}
