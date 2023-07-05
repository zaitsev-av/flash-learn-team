import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import { Card } from '@/components'
import s from '@/components/ui/modal/modal.module.scss'

type ModalDescriptionProps = {
  content: string | ReactNode | string[] | ReactNode[]
  className?: string
}

export const ModalContent: FC<ModalDescriptionProps> = ({ content, className }) => {
  const style = clsx(s.body, className)

  return (
    <Dialog.Description>
      <Card className={style}>{content}</Card>
    </Dialog.Description>
  )
}
