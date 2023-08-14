import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewDeckSchema } from './add-new-deck-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  trigger: ReactNode
  onSubmit: (data: Form) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
type Form = z.infer<typeof addNewDeckSchema>
const defaultValues: Form = {
  namePack: '',
  private: false,
}

export const AddNewDeckModal: FC<AddNewPackModalPropsType> = props => {
  const { trigger, onSubmit, isOpen, setIsOpen } = props
  const { handleSubmit, control, reset } = useForm<Form>({
    resolver: zodResolver(addNewDeckSchema),
    mode: 'onSubmit',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ namePack: data.namePack, private: data.private })
    setIsOpen(false)
    reset(defaultValues)
  })

  return (
    <Modal.Root title={'Add New Deck'} trigger={trigger} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <ControlledTextField
            style={{ marginBottom: '1.5rem' }}
            name={'namePack'}
            control={control}
            title={'Name Deck'}
            inputType={'text'}
          />
          <ControlledCheckbox control={control} name={'private'} label={'Private deck'} left />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Deck</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
