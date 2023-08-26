import { FC } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'

import { CloseIcon } from '@/assets'
import { Modal } from '@/components'
import s from '@/components/ui/modal/image-modal/image-modal.module.scss'

type ImagePropsType = {
  src: string
  alt: string
  onClick?: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const ImageModal: FC<ImagePropsType> = props => {
  const { src, onClick, alt, isOpen, setIsOpen } = props

  return (
    <Modal.Root isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)} className={s.modal}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <Dialog.Close asChild>
          <button className={s.closeIcon}>
            <CloseIcon />
          </button>
        </Dialog.Close>
        <img src={src} alt={alt} onClick={onClick} className={s.image} />
      </motion.div>
    </Modal.Root>
  )
}
