import { FC, ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cardEditorModal } from './card-editor-modal.ts'

import { Button, ControlledTextField, Typography } from '@/components'
import { ControlledInputFile } from '@/components/ui/controlled/controlled-input-file.tsx'
import { Modal } from '@/components/ui/modal'

type AddNewCardModalPropsType = {
  modalTitle: string
  buttonName: string
  children?: ReactNode
  question?: string
  answer?: string
  questionImg?: string
  answerImg?: string
  onSubmit: (data: FormData) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export type AddCardsForm = z.infer<typeof cardEditorModal>
const defaultValues: AddCardsForm = {
  question: '',
  answer: '',
  questionImg: '',
  answerImg: '',
}

export const CardEditorModal: FC<AddNewCardModalPropsType> = props => {
  const {
    modalTitle,
    buttonName,
    children,
    onSubmit,
    setIsOpen,
    isOpen,
    answer,
    answerImg,
    questionImg,
    question,
  } = props

  const { handleSubmit, control, reset } = useForm<AddCardsForm>({
    resolver: zodResolver(cardEditorModal),
    mode: 'onSubmit',
    values: {
      question: question ?? '',
      answer: answer ?? '',
      questionImg: questionImg,
      answerImg: answerImg,
    },
  })

  const onSubmitForm = handleSubmit(data => {
    const formData = new FormData()

    formData.append('answer', data.answer)
    formData.append('question', data.question)
    data.answerImg &&
      typeof data.answerImg !== 'string' &&
      formData.append('answerImg', data.answerImg)
    data.questionImg &&
      typeof data.questionImg !== 'string' &&
      formData.append('questionImg', data.questionImg)

    onSubmit(formData)
    setIsOpen(false)
    reset(defaultValues)
  })

  const onOpenHandler = (isOpen: boolean) => {
    setIsOpen(isOpen)
    reset(defaultValues)
  }

  return (
    <Modal.Root
      title={modalTitle}
      trigger={children}
      onOpenChange={isOpen => onOpenHandler(isOpen)}
      isOpen={isOpen}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <form onSubmit={onSubmitForm}>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant={'primary'} type={'submit'}>
              <Typography variant={'subtitle2'}>{buttonName}</Typography>
            </Button>
            <Button variant={'secondary'} onClick={() => onOpenHandler(false)}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
          </Modal.Footer>
        </form>
      </motion.div>
    </Modal.Root>
  )
}
