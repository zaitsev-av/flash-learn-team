import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { ModalContent } from '@/components/ui/modal/content.tsx'
import { ModalTitle } from '@/components/ui/modal/title.tsx'

type ModalProps = {
  title: string
  trigger?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  body?: string | ReactNode | string[] | ReactNode[]
  footer?: string | ReactNode | string[] | ReactNode[]
}

export const Modal: FC<ModalProps> = ({ title, body, footer, isOpen, trigger, onOpenChange }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <ModalTitle title={title} />
          {body && <ModalContent content={body} />}
          {footer && <ModalContent className={s.footer} content={footer} />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
