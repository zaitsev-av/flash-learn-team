import { LogoutIcon, ProfileIcon } from '@/assets'
import { Avatar, Typography } from '@/components'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

export const AvtarDropdownMenu = () => {
  return (
    <>
      <MenuItem>
        <>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            }
          />
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
