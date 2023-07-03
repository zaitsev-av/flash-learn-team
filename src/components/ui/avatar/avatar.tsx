import { FC } from 'react'

import * as Avatar from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  name?: string
  variant: 'header' | 'menu'
}
export const UserAvatar: FC<UserAvatarPropsType> = ({ name, variant }) => {
  return (
    <div className={`${s.wrapper} ${variant === 'menu' && s.menu}`}>
      {name && (
        <Label.Root className={s.label_wrapper} htmlFor="firstName">
          {name}
        </Label.Root>
      )}
      <Avatar.Root className={s.root}>
        <Avatar.Image
          className={s.avatar_image}
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
      </Avatar.Root>
    </div>
  )
}
