import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { ModalContent } from '@/components/ui/modal/content.tsx'
import { ModalTitle } from '@/components/ui/modal/title.tsx'

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
          <ModalContent description={body} />
          <ModalContent className={s.footer} description={footer} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
