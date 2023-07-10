import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './menu-item.module.scss'

type MenuItemPropsType<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  separator?: boolean
} & ComponentPropsWithoutRef<T>
export const MenuItem = <T extends ElementType = 'div'>({
  as,
  children,
  separator = true,
  ...rest
}: MenuItemPropsType<T>) => {
  return (
    <>
      <DropdownMenu.Item className={s.item} {...rest}>
        {children}
      </DropdownMenu.Item>
      {separator && <DropdownMenu.Separator className={s.separator} />}
    </>
  )
}
