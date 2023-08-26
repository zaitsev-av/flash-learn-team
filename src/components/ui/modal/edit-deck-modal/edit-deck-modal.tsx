import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { editPackSchema } from './edit-deck-modal-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Modal } from '@/components'

type EditPackModalProps = {
  children?: ReactNode
  isPrivate: boolean
  deckName: string
  onSubmit: (data: Form) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

type Form = z.infer<typeof editPackSchema>
export const EditDeckModal: FC<EditPackModalProps> = ({
  isOpen,
  onSubmit,
  deckName,
  children,
  isPrivate,
  setIsOpen,
}) => {
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
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
      </motion.div>
    </Modal.Root>
  )
}
