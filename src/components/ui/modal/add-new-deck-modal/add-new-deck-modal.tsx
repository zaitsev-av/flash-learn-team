import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewDeckSchema } from './add-new-deck-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { ControlledInputFile } from '@/components/ui/controlled/controlled-input-file.tsx'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  trigger: ReactNode
  onSubmit: (data: FormData) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
type Form = z.infer<typeof addNewDeckSchema>
const defaultValues: Form = {
  name: '',
  cover: '',
  isPrivate: false,
}

export const AddNewDeckModal: FC<AddNewPackModalPropsType> = props => {
  const { trigger, onSubmit, isOpen, setIsOpen } = props
  const { handleSubmit, control, reset } = useForm<Form>({
    resolver: zodResolver(addNewDeckSchema),
    mode: 'onSubmit',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(data => {
    const formData = new FormData()

    formData.append('name', data.name)
    data.cover && formData.append('cover', data.cover)
    formData.append('isPrivate', String(data.isPrivate))
    onSubmit(formData)
    setIsOpen(false)
    reset(defaultValues)
  })

  return (
    <Modal.Root title={'Add New Deck'} trigger={trigger} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <ControlledTextField
            style={{ marginBottom: '1rem' }}
            name={'name'}
            control={control}
            title={'Name Deck'}
            inputType={'text'}
          />
          <ControlledInputFile name={'cover'} control={control}>
            {onClick => (
              <Button variant={'secondary'} fullWidth onClick={onClick} type={'button'}>
                <Typography variant={'subtitle2'}>Change Cover</Typography>
              </Button>
            )}
          </ControlledInputFile>
          <ControlledCheckbox control={control} name={'isPrivate'} label={'Private deck'} left />
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
