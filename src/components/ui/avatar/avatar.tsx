import { ComponentProps, CSSProperties, FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'
import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

import { useImageOpen } from '@/common'
import { ImageModal } from '@/components'

export type UserAvatarPropsType = {
  className?: string
  userName?: string
  menuItem?: string
  showLabel?: boolean
  size?: CSSProperties['width']
  src?: ComponentProps<'img'>['src']
}
export const Avatar: FC<UserAvatarPropsType> = ({
  userName,
  className,
  menuItem,
  showLabel = false,
  src,
  size = '2.25rem',
}) => {
  const { openImageInModal, image, setImageModalOpen, isImageModalOpen } = useImageOpen()

  const fallbackText = userName?.slice(0, 2).toUpperCase()
  const avatarSize = { width: size, height: size, cursor: 'pointer' }
  const classNames = {
    wrapper: clsx(s.wrapper, menuItem),
    root: clsx(s.root, className),
    avatar: clsx(s.avatar_image),
    fallback: clsx(s.avatarFallback),
    label: clsx(s.label_wrapper),
  }

  return (
    <div className={classNames.wrapper}>
      <ImageModal
        src={image}
        alt={'image'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
      {showLabel && userName && <Label.Root className={classNames.label}>{userName}</Label.Root>}
      <AvatarRDX.Root
        className={classNames.root}
        tabIndex={0}
        onClick={() => openImageInModal(src ?? '')}
      >
        <AvatarRDX.Image
          className={classNames.avatar}
          src={src}
          alt="User avatar"
          style={avatarSize}
        />
        <AvatarRDX.Fallback style={avatarSize} className={classNames.fallback}>
          {fallbackText}
        </AvatarRDX.Fallback>
      </AvatarRDX.Root>
    </div>
  )
}
