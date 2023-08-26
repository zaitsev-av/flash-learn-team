import { FC, ReactNode } from 'react'

import { motion } from 'framer-motion'

import { Button, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type DeleteDialogProps = {
  title: string
  itemName: string
  buttonTitle: string
  children?: ReactNode
  onClick: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export const DeleteModal: FC<DeleteDialogProps> = ({
  onClick,
  children,
  title,
  itemName,
  buttonTitle,
  isOpen,
  setIsOpen,
}) => {
  const bodyMessage = `Do you really want to delete ${itemName}`

  const clickHandler = () => {
    onClick()
    setIsOpen(false)
  }

  return (
    <div>
      <Modal.Root onOpenChange={setIsOpen} trigger={children} isOpen={isOpen} title={title}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Modal.Body>{bodyMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant={'primary'} onClick={clickHandler}>
              <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
            </Button>
            <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
          </Modal.Footer>
        </motion.div>
      </Modal.Root>
    </div>
  )
}
