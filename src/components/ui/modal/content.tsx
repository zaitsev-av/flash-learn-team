import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import { Card } from '@/components'
import s from '@/components/ui/modal/modal.module.scss'

type ModalDescriptionProps = {
  description: string | ReactNode
  className?: string
}

export const ModalContent: FC<ModalDescriptionProps> = ({ description, className }) => {
  const style = clsx(s.body, className)

  return (
    <Dialog.Description>
      <Card className={style}>{description}</Card>
    </Dialog.Description>
  )
}
