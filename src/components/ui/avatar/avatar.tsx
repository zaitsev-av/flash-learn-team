import { ComponentProps, FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  label?: string
  src?: ComponentProps<'img'>['src']
  size?: ComponentProps<'img'>['width']
}
export const Avatar: FC<UserAvatarPropsType> = ({ size = 36, label, className, src }) => {
  const fallbackText = label?.slice(0, 2).toUpperCase()
  const fallbackSize = { width: `${size}px`, height: `${size}px` }
  const classNames = {
    wrapper: clsx(s.wrapper),
    root: clsx(s.root, className),
    avatar: clsx(s.avatar_image),
    fallback: clsx(s.avatarFallback),
    label: clsx(s.label_wrapper),
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <Label.Root className={classNames.label} htmlFor="user name">
          {label}
        </Label.Root>
      )}
      <AvatarRDX.Root className={classNames.root}>
        <AvatarRDX.Image
          className={classNames.avatar}
          width={size}
          height={size}
          src={src}
          alt="User avatar"
        />
        <AvatarRDX.Fallback style={fallbackSize} className={classNames.fallback} delayMs={600}>
          {fallbackText}
        </AvatarRDX.Fallback>
      </AvatarRDX.Root>
    </div>
  )
}
