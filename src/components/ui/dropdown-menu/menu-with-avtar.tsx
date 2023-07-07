import { LogoutIcon, ProfileIcon } from '@/assets'
import { Avatar, Typography } from '@/components'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

export const MenuWithAvtar = () => {
  return (
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
  )
}
