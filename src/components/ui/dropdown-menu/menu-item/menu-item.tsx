import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './menu-item.module.scss'

type MenuItemPropsType<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  separator?: boolean
  onSelect?: () => void
} & ComponentPropsWithoutRef<T>
export const MenuItem = <T extends ElementType = 'div'>({
  as,
  children,
  separator = true,
  onSelect,
  ...rest
}: MenuItemPropsType<T>) => {
  const onSelectHandler = (e: any) => {
    onSelect && onSelect()
    e.preventDefault()
  }
  const TagName = as || 'div'
  const classNames = {
    menuItem: s.menuItem,
    item: s.item,
    separator: s.separator,
  }

  return (
    <DropdownMenu.Item onSelect={onSelectHandler} className={classNames.menuItem}>
      <TagName className={classNames.item} {...rest}>
        {children}
      </TagName>
      {separator && <DropdownMenu.Separator className={classNames.separator} />}
    </DropdownMenu.Item>
  )
}
