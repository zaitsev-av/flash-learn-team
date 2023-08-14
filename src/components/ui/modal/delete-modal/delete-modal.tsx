import { FC, ReactNode } from 'react'

import { Button, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

export type ItemType = {
  id: string
  title: string
  isPrivate?: boolean
}

type DeleteDialogProps = {
  title: string
  item: ItemType
  buttonTitle: string
  children: ReactNode
  onClick: (id: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export const DeleteModal: FC<DeleteDialogProps> = ({
  onClick,
  children,
  title,
  item,
  buttonTitle,
  isOpen,
  setIsOpen,
}) => {
  //TODO body message should warn about deleting all cards if item = Pack
  const bodyMessage = `Do you really want to delete ${item.title}`

  const clickHandler = () => {
    onClick(item.id)
    setIsOpen(false)
  }

  return (
    <div>
      <Modal.Root onOpenChange={setIsOpen} trigger={children} isOpen={isOpen} title={title}>
        <Modal.Body>{bodyMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} onClick={clickHandler}>
            <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </div>
  )
}
