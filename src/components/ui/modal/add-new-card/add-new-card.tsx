import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewCard } from './add-new-card.ts'

import { Button, ControlledTextField, Typography } from '@/components'
import { ControlledInputFile } from '@/components/ui/controlled/controlled-input-file.tsx'
import { Modal } from '@/components/ui/modal'

type AddNewCardModalPropsType = {
  children: ReactNode
  onSubmit: (data: FormData) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export type AddCardsForm = z.infer<typeof addNewCard>
const defaultValues: AddCardsForm = {
  question: '',
  answer: '',
  questionImg: '',
  answerImg: '',
}

export const AddNewCard: FC<AddNewCardModalPropsType> = props => {
  const { children, onSubmit, setIsOpen, isOpen } = props

  const { handleSubmit, control, reset } = useForm<AddCardsForm>({
    resolver: zodResolver(addNewCard),
    mode: 'onSubmit',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(data => {
    const formData = new FormData()

    formData.append('answer', data.answer)
    formData.append('question', data.question)
    data.answerImg && formData.append('answerImg', data.answerImg)
    data.answerImg && formData.append('questionImg', data.answerImg)

    onSubmit(formData)
    setIsOpen(false)
    reset(defaultValues)
  })

  const questionType = (
    <>
      <ControlledTextField
        style={{ marginBottom: '0.5rem' }}
        name={'question'}
        control={control}
        title={'Question'}
        inputType={'text'}
      />
      <ControlledInputFile name={'questionImg'} control={control}>
        {onClick => (
          <Button variant={'secondary'} fullWidth onClick={onClick} type={'button'}>
            <Typography variant={'subtitle2'}>Change Cover</Typography>
          </Button>
        )}
      </ControlledInputFile>
      <ControlledTextField
        style={{ marginBottom: '0.5rem' }}
        name={'answer'}
        control={control}
        title={'Answer'}
        inputType={'text'}
      />
      <ControlledInputFile name={'answerImg'} control={control}>
        {onClick => (
          <Button
            variant={'secondary'}
            fullWidth
            style={{ marginBottom: '3px' }}
            onClick={onClick}
            type={'button'}
          >
            <Typography variant={'subtitle2'}>Change Cover</Typography>
          </Button>
        )}
      </ControlledInputFile>
    </>
  )

  return (
    <Modal.Root title={'Add New Card'} trigger={children} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>{questionType}</Modal.Body>
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
