import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewPackSchema } from './add-new-pack-schema.ts'

import { Button, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  trigger: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  onSubmit: (data: Form) => void
}
type Form = z.infer<typeof addNewPackSchema>

export const AddNewPackModal: FC<AddNewPackModalPropsType> = props => {
  const { trigger, onOpenChange, isOpen, onSubmit } = props
  const { handleSubmit, control, reset } = useForm<Form>({
    resolver: zodResolver(addNewPackSchema),
    mode: 'onSubmit',
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ namePack: data.namePack, private: data.private })
    // eslint-disable-next-line no-console
    console.log('login-form', data)
    reset({
      namePack: '',
      private: false,
    })
    onOpenChange && onOpenChange(false)
  })

  return (
    <Modal
      title={'Add New Pack'}
      trigger={trigger}
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      body={
        <form onSubmit={onSubmitForm}>
          <ControlledTextField
            style={{ marginBottom: '1.5rem' }}
            name={'namePack'}
            control={control}
            title={'Name Pack'}
            inputType={'text'}
          />
          <ControlledCheckbox control={control} name={'private'} label={'Private pack'} left />
        </form>
      }
      footer={
        <>
          <form onSubmit={onSubmitForm}>
            <Button variant={'primary'} type={'submit'}>
              <Typography variant={'subtitle2'}>Add New Pack</Typography>
            </Button>
          </form>
          <Button variant={'secondary'} onClick={() => onOpenChange && onOpenChange(false)}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </>
      }
    />
  )
}
