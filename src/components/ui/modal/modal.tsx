import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { CloseIcon } from '@/assets'
import { Typography } from '@/components'

type ModalProps = {
  title?: string
  trigger?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  body?: ReactNode
  footer?: ReactNode
  width?: string
  className?: string
}

export const Modal: FC<ModalProps> = ({
  title,
  body,
  footer,
  isOpen,
  trigger,
  onOpenChange,
  className,
}) => {
  const cNames = {
    content: clsx(s.content, className),
    overlay: clsx(s.overlay),
    body: clsx(s.body),
    footer: clsx(s.footer),
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={cNames.overlay} />
        <Dialog.Content className={cNames.content}>
          {title && <ModalTitle title={title} />}
          {body && <div className={cNames.body}>{body}</div>}
          {footer && <div className={cNames.footer}>{footer}</div>}
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
