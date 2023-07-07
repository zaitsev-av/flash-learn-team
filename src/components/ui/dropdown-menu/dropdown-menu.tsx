import { FC } from 'react'

import * as DropdownMenuRDX from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import OpenPackMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { MenuWithAvtar } from '@/components/ui/dropdown-menu/menu-with-avtar.tsx'
import { MenuWithLearnIcon } from '@/components/ui/dropdown-menu/menu-with-learn-icon.tsx'

export type DropdownMenuPropsType = {
  variant?: 'avatar' | 'learn-menu'
}
export const DropdownMenu: FC<DropdownMenuPropsType> = ({ variant = 'avatar' }) => {
  return (
    <DropdownMenuRDX.Root>
      <DropdownMenuRDX.Trigger asChild className={s.trigger}>
        <button className={s.icon_button}>
          {variant === 'avatar' ? <Avatar variant={'header'} /> : <OpenPackMenuIcon />}
        </button>
      </DropdownMenuRDX.Trigger>

      <DropdownMenuRDX.Portal>
        <DropdownMenuRDX.Content className={s.content} sideOffset={0} align={'end'} alignOffset={0}>
          {variant === 'avatar' && <MenuWithAvtar />}
          {variant === 'learn-menu' && <MenuWithLearnIcon />}
          <DropdownMenuRDX.Arrow className={s.arrow} />
        </DropdownMenuRDX.Content>
      </DropdownMenuRDX.Portal>
    </DropdownMenuRDX.Root>
  )
}
