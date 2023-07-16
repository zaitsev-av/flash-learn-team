import { FC, ReactNode, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewCard } from './add-new-card.ts'

import { Button, ControlledTextField, Select, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  children: ReactNode
  onSubmit: (data: Form) => void
}
type Form = z.infer<typeof addNewCard>

export const AddNewCard: FC<AddNewPackModalPropsType> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { children, onSubmit } = props
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(addNewCard),
    mode: 'onSubmit',
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ question: data.question, answer: data.answer })
    setIsOpen(false)
  })

  return (
    <Modal.Root title={'Add New Card'} trigger={children} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <Select
            items={['Picture', 'Text', 'Video']}
            label={'Choose a question format Picture'}
            fullWidth
          />
          <ControlledTextField
            style={{ marginBottom: '1.5rem' }}
            name={'question'}
            control={control}
            title={'Question'}
            inputType={'text'}
          />
          <ControlledTextField
            style={{ marginBottom: '1.5rem' }}
            name={'answer'}
            control={control}
            title={'Answer'}
            inputType={'text'}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
