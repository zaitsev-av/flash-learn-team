import { ComponentPropsWithoutRef, ElementType, forwardRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './menu-item.module.scss'

type MenuItemPropsType<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  separator?: boolean
  onSelect?: () => void
} & ComponentPropsWithoutRef<T>
export const MenuItem = forwardRef(
  <T extends ElementType = 'div'>(props: MenuItemPropsType<T>, ref: any) => {
    const { as, children, separator = true, onSelect, ...rest } = props
    const onSelectHandler = (e: Event) => {
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
        <TagName className={classNames.item} ref={ref} {...rest}>
          {children}
        </TagName>
        {separator && <DropdownMenu.Separator className={classNames.separator} />}
      </DropdownMenu.Item>
    )
  }
)
