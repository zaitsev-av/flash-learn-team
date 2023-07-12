import { ComponentProps, CSSProperties, FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  menuItem?: string
  label?: string
  size?: CSSProperties['width']
  src?: ComponentProps<'img'>['src']
}
export const Avatar: FC<UserAvatarPropsType> = ({
  label,
  className,
  menuItem,
  src,
  size = '2.25rem',
}) => {
  const fallbackText = label?.slice(0, 2).toUpperCase()
  const avatarSize = { width: size, height: size }
  const classNames = {
    wrapper: clsx(s.wrapper, menuItem),
    root: clsx(s.root, className),
    avatar: clsx(s.avatar_image),
    fallback: clsx(s.avatarFallback),
    label: clsx(s.label_wrapper),
  }

  return (
    <div className={classNames.wrapper}>
      {label && <Label.Root className={classNames.label}>{label}</Label.Root>}
      <AvatarRDX.Root className={classNames.root} tabIndex={0}>
        <AvatarRDX.Image
          className={classNames.avatar}
          src={src}
          alt="User avatar"
          style={avatarSize}
        />
        <AvatarRDX.Fallback style={avatarSize} className={classNames.fallback} delayMs={600}>
          {fallbackText}
        </AvatarRDX.Fallback>
      </AvatarRDX.Root>
    </div>
  )
}
