import { FC } from 'react'

import * as DropdownMenuRDX from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'
import { MenuItem } from './menu-item/menu-item.tsx'

import { DeletePackIcon, LearnPackIcon, LogoutIcon, PencilIcon, ProfileIcon } from '@/assets'
import OpenPackMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'

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
          {variant === 'avatar' ? (
            <>
              <MenuItem>
                <>
                  <Avatar variant={'menu'} />
                  <div style={{ flexDirection: 'column' }}>
                    <Typography variant={'caption'}>
                      <div>userName</div>
                      <div>userEmail</div>
                    </Typography>
                  </div>
                </>
              </MenuItem>
              <MenuItem>
                <ProfileIcon />
                <Typography variant={'caption'}>My Profile</Typography>
              </MenuItem>
              <MenuItem separator={false}>
                <LogoutIcon />
                <Typography variant={'caption'}>Sign Out</Typography>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <LearnPackIcon />
                <Typography variant={'caption'}>Learn</Typography>
              </MenuItem>
              <MenuItem>
                <PencilIcon />
                <Typography variant={'caption'}>Edit</Typography>
              </MenuItem>
              <MenuItem separator={false}>
                <DeletePackIcon />
                <Typography variant={'caption'}>Delete</Typography>
              </MenuItem>
            </>
          )}
          <DropdownMenuRDX.Arrow className={s.arrow} />
        </DropdownMenuRDX.Content>
      </DropdownMenuRDX.Portal>
    </DropdownMenuRDX.Root>
  )
}
