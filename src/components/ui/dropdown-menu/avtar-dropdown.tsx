import s from './dropdown-menu.module.scss'

import { LogoutIcon, ProfileIcon } from '@/assets'
import { Avatar, DropdownMenu, Typography } from '@/components'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

export const AvtarDropdown = () => {
  return (
    <DropdownMenu
      trigger={
        <button className={s.icon_button}>
          {
            <Avatar
              src={
                'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              }
            />
          }
        </button>
      }
    >
      <MenuItem>
        <>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            }
            menuItem={s.menu_item}
          />
          <div style={{ flexDirection: 'column' }}>
            <Typography variant={'caption'}>
              <div>userName</div>
              <div>userEmail</div>
            </Typography>
          </div>
        </>
      </MenuItem>
      <MenuItem as={'a'} href={'#'}>
        <ProfileIcon />
        <Typography variant={'caption'} as={'a'} href={'#'}>
          My Profile
        </Typography>
      </MenuItem>
      <MenuItem separator={false}>
        <LogoutIcon />
        <Typography variant={'caption'}>Sign Out</Typography>
      </MenuItem>
    </DropdownMenu>
  )
}
