import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

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
  const onSelectHandler = () => {}
  const Item = as || 'div'
  const classNames = {
    menuItem: clsx(s.menu_item),
    item: clsx(s.item),
    separator: clsx(s.separator),
  }

  return (
    <>
      <Item className={classNames.menuItem} {...rest}>
        <DropdownMenu.Item onSelect={onSelectHandler} className={classNames.item}>
          {children}
        </DropdownMenu.Item>
      </Item>
      {separator && <DropdownMenu.Separator className={classNames.separator} />}
    </>
  )
}
