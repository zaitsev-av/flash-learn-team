import { FC } from 'react'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import s from '../dropdown-menu.module.scss'

import { LogoutIcon, ProfileIcon } from '@/assets'
import { Avatar, DropdownMenu, Typography } from '@/components'
import { MenuItem } from '@/components/ui/dropdown-menu/menu-item/menu-item.tsx'

type AvtarDropdownPropsType = {
  userName: string
  userEmail: string
  src?: string
  onSignOut: () => void
}

export const AvtarDropdown: FC<AvtarDropdownPropsType> = props => {
  const { src, userName, userEmail, onSignOut } = props
  const cn = { icon: clsx(s.icon_button), item: clsx(s.menu_item), wrapper: clsx(s.wrapper) }

  return (
    <div className={cn.wrapper}>
      <DropdownMenu
        trigger={
          <button className={cn.icon}>{<Avatar src={src} userName={userName} showLabel />}</button>
        }
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MenuItem>
            <>
              <Avatar src={src} menuItem={cn.item} userName={userName} />
              <div style={{ flexDirection: 'column' }}>
                <Typography variant={'caption'}>
                  <div>{userName}</div>
                  <div>{userEmail}</div>
                </Typography>
              </div>
            </>
          </MenuItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MenuItem as={Link} to={'/profile'}>
            <ProfileIcon />
            <Typography variant={'caption'}>My Profile</Typography>
          </MenuItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MenuItem separator={false} onSelect={onSignOut}>
            <LogoutIcon />
            <Typography variant={'caption'}>Sign Out</Typography>
          </MenuItem>
        </motion.div>
      </DropdownMenu>
    </div>
  )
}
