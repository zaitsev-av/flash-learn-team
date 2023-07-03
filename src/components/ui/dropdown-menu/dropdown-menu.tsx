import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { ProfileIcon, SignOutIcon } from '@/assets'
import { UserAvatar } from '@/components/ui/avatar/avatar.tsx'
import { Typography } from '@/components/ui/typography'

export const AvatarDropdownMenu: FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.icon_button} aria-label="Customise options">
          <UserAvatar variant={'header'} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.dropdown_menu_content}
          sideOffset={5}
          align={'end'}
          alignOffset={5}
        >
          <DropdownMenu.Item className={s.dropdown_menu_item}>
            <UserAvatar variant={'menu'} />
            <div style={{ flexDirection: 'column' }}>
              <Typography variant={'caption'}>
                <div>Alex</div>
                <div>name@gmail.com</div>
              </Typography>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.dropdown_menu_separator} />
          <DropdownMenu.Item className={s.dropdown_menu_item}>
            <Typography variant={'caption'}>
              <ProfileIcon /> My Profile
            </Typography>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.dropdown_menu_separator} />
          <DropdownMenu.Item className={s.dropdown_menu_item}>
            <Typography variant={'caption'}>
              <SignOutIcon /> Sign Out
            </Typography>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={s.dropdown_menu_arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
