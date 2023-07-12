import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Card } from '@/components'
import { ModalTitle } from '@/components/ui/modal/title.tsx'

type ModalProps = {
  title: string
  trigger?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  body?: string | ReactNode | string[] | ReactNode[]
  footer?: string | ReactNode | string[] | ReactNode[]
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
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={cNames.overlay} />
        <Dialog.Content className={cNames.content}>
          <ModalTitle title={title} />
          <Card>
            <div className={s.body}>{body}</div>
            {footer}
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
