import { FC, ReactNode, useState } from 'react'

import { Button, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

export type ItemType = DecksItemType | CardItemType
type DecksItemType = {
  id: string
  title: string
}
//TODO change this mock types to types from backend
type CardItemType = {
  id: string
  title: string
}

type DeleteDialogProps = {
  title: string
  item: ItemType
  buttonTitle: string
  children: ReactNode
  onClick: (id: string) => void
}
export const DeleteDialog: FC<DeleteDialogProps> = ({
  onClick,
  children,
  title,
  item,
  buttonTitle,
}) => {
  //TODO body message should warn about deleting all cards if item = Pack
  const bodyMessage = `Do you really want to delete ${item.title}`

  const [open, setOpen] = useState<boolean>(false)
  const clickHandler = () => {
    onClick(item.id)
    setOpen(false)
  }

  return (
    <div>
      <Modal.Root onOpenChange={setOpen} trigger={children} isOpen={open} title={title}>
        <Modal.Body>{bodyMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} onClick={clickHandler}>
            <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </div>
  )
}
