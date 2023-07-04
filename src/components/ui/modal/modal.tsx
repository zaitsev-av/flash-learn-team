import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { CloseIcon } from '@/assets'
import { Card, Typography } from '@/components'

type ModalProps = {
  trigger?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  body?: string | ReactNode
  footer?: string | ReactNode
}

export const Modal: FC<ModalProps> = ({ body, footer, isOpen, trigger, onOpenChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <ModalTitle title={'ModalTitle'} />
          <ModalBody description={body} />
          <ModalBody description={footer} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type ModalTitleProps = {
  title: string
}
export const ModalTitle: FC<ModalTitleProps> = ({ title }) => {
  return (
    <Dialog.Title className={s.titleContainer}>
      <Typography variant={'h2'}>{title}</Typography>
      <Dialog.Close asChild className={s.closeIcon}>
        <button>
          <CloseIcon />
        </button>
      </Dialog.Close>
    </Dialog.Title>
  )
}

type ModalDescriptionProps = {
  description: string | ReactNode
}

export const ModalBody: FC<ModalDescriptionProps> = ({ description }) => {
  return (
    <Dialog.Description>
      <Card className={s.description}>{description}</Card>
    </Dialog.Description>
  )
}
