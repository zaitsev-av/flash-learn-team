import { CSSProperties, FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarPropsType = {
  className?: string
  menuItem?: string
  label?: string
  src?: string
  size?: CSSProperties['width']
}
export const Avatar: FC<UserAvatarPropsType> = ({
  label,
  className,
  menuItem,
  src,
  size = '2.25rem',
}) => {
  const classNames = {
    label: clsx(s.label_wrapper),
    wrapper: clsx(s.wrapper, menuItem),
    root: clsx(s.root, className),
  }

  return (
    <div className={classNames.wrapper}>
      {label && <Label.Root className={s.label_wrapper}>{label}</Label.Root>}
      <AvatarRDX.Root className={classNames.root}>
        <AvatarRDX.Image
          className={s.avatar_image}
          src={src}
          alt="User avatar"
          style={{ width: size, height: size }}
        />
      </AvatarRDX.Root>
    </div>
  )
}
