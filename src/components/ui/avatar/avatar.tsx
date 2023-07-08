import { FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  name?: string
  variant: 'header' | 'menu'
  src: string
}
export const Avatar: FC<UserAvatarPropsType> = ({ name, variant, className, avatar }) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div className={`${s.wrapper} ${variant === 'menu' && s.menu}`}>
      {name && (
        <Label.Root className={s.label_wrapper} htmlFor="firstName">
          {name}
        </Label.Root>
      )}
      <AvatarRDX.Root className={classNames.root}>
        <AvatarRDX.Image className={s.avatar_image} src={avatar} alt="Colm Tuite" />
      </AvatarRDX.Root>
    </div>
  )
}
