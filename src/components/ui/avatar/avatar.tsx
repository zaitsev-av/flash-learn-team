import { FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  name?: string
  variant: 'header' | 'menu'
}
export const Avatar: FC<UserAvatarPropsType> = ({ name, variant, className }) => {
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
        <AvatarRDX.Image
          className={s.avatar_image}
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
      </AvatarRDX.Root>
    </div>
  )
}
