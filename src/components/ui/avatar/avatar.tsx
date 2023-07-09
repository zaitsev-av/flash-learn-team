import { FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  label?: string
  src?: string
}
export const Avatar: FC<UserAvatarPropsType> = ({ label, className, src }) => {
  const classNames = {
    wrapper: clsx(s.wrapper, className),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <Label.Root className={s.label_wrapper} htmlFor="user name">
          {label}
        </Label.Root>
      )}
      <AvatarRDX.Root className={classNames.root}>
        <AvatarRDX.Image className={s.avatar_image} src={src} alt="User avatar" />
      </AvatarRDX.Root>
    </div>
  )
}
