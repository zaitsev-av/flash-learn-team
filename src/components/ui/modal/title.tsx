import { FC } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { CloseIcon } from '@/assets'
import { Typography } from '@/components'

type ModalTitleProps = {
  title: string
}
export const ModalTitle: FC<ModalTitleProps> = ({ title }) => {
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
