import { FC, ReactNode, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewPackSchema } from './add-new-pack-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  trigger: ReactNode
  onSubmit: (data: Form) => void
}
type Form = z.infer<typeof addNewPackSchema>

export const AddNewPackModal: FC<AddNewPackModalPropsType> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { trigger, onSubmit } = props
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(addNewPackSchema),
    mode: 'onSubmit',
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ namePack: data.namePack, private: data.private })
    setIsOpen(false)
  })

  return (
    <Modal.Root title={'Add New Pack'} trigger={trigger} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <ControlledTextField
            style={{ marginBottom: '1.5rem' }}
            name={'namePack'}
            control={control}
            title={'Name Pack'}
            inputType={'text'}
          />
          <ControlledCheckbox control={control} name={'private'} label={'Private pack'} left />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpen(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
