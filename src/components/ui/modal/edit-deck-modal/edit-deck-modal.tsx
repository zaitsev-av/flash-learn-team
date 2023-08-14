import { FC, ReactNode, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { editPackSchema } from './edit-deck-modal-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Modal } from '@/components'

type EditPackModalProps = {
  children: ReactNode
  isPrivate: boolean
  deckName: string
  onSubmit: (data: Form) => void
}

type Form = z.infer<typeof editPackSchema>
export const EditDeckModal: FC<EditPackModalProps> = ({
  onSubmit,
  deckName,
  isPrivate,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(editPackSchema),
    mode: 'onSubmit',
    values: { isPrivate, newNameDeck: deckName },
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit({ newNameDeck: data.newNameDeck, isPrivate: data.isPrivate })
    setIsOpen(false)
  })

  return (
    <Modal.Root isOpen={isOpen} onOpenChange={setIsOpen} trigger={children} title={'Edit Deck'}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <ControlledTextField
            title={'Name Deck'}
            inputType={'text'}
            control={control}
            name={'newNameDeck'}
          />
          <ControlledCheckbox control={control} left label={'Private Deck'} name={'isPrivate'} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            Save Changes
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
