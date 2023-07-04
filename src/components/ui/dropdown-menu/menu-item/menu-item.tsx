import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './menu-item.module.scss'
type MenuItemPropsType = {
  children: ReactNode
  separator?: boolean
}
export const MenuItem: FC<MenuItemPropsType> = ({ children, separator = true }) => {
  return (
    <>
      <DropdownMenu.Item className={s.item}>{children}</DropdownMenu.Item>
      {separator && <DropdownMenu.Separator className={s.separator} />}
    </>
  )
}
