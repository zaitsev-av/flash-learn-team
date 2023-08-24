import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

//TODO check border-bottom styles
import s from './modal.module.scss'

import { CloseIcon } from '@/assets'
import { Typography } from '@/components'

type ModalProps = {
  title?: string
  trigger?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  width?: string
  className?: string
  children?: ReactNode
}

const Root: FC<ModalProps> = ({ title, isOpen, trigger, onOpenChange, children, className }) => {
  const classNames = {
    content: clsx(s.content, className),
    overlay: clsx(s.overlay),
    body: clsx(s.body),
    footer: clsx(s.footer),
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.overlay} />
        <Dialog.Content className={classNames.content}>
          {title && <ModalTitle title={title} />}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type ModalTitleProps = {
  title: string
}
const ModalTitle: FC<ModalTitleProps> = ({ title }) => {
  return (
    <Dialog.Title className={s.titleContainer}>
      <Typography variant={'h2'}>{title}</Typography>
      <Dialog.Close asChild>
        <button className={s.closeIcon}>
          <CloseIcon />
        </button>
      </Dialog.Close>
    </Dialog.Title>
  )
}

type ModalChildType = {
  children: ReactNode
  className?: string
}

const Body: FC<ModalChildType> = ({ className, children }) => {
  const classNames = {
    body: clsx(s.body, className),
  }

  return <div className={classNames.body}>{children}</div>
}

const Footer: FC<ModalChildType> = ({ className, children }) => {
  const classNames = {
    footer: clsx(s.footer, className),
  }

  return <div className={classNames.footer}>{children}</div>
}

export const Modal = { Root, Body, Footer }
