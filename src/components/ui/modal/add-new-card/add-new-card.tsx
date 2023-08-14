import { FC, ReactNode, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewCard } from './add-new-card.ts'

import { Button, ControlledTextField, Select, Typography } from '@/components'
import { useImageUploader } from '@/components/ui/avatar/useImageUploader.ts'
import { Modal } from '@/components/ui/modal'

type AddNewPackModalPropsType = {
  children: ReactNode
  onSubmit: (data: Form) => void
}
type Form = z.infer<typeof addNewCard>
const defaultValues: Form = {
  question: '',
  answer: '',
}

export const AddNewCard: FC<AddNewPackModalPropsType> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [type, setType] = useState<string>('Text')
  const { children, onSubmit } = props
  const { handleSubmit, control, reset } = useForm<Form>({
    resolver: zodResolver(addNewCard),
    mode: 'onSubmit',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ question: data.question, answer: data.answer })
    setIsOpen(false)
    reset(defaultValues)
  })

  const questionType =
    type === 'Text' ? (
      <>
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
      </>
    ) : (
      <ImagePreviewUploader />
    )

  return (
    <Modal.Root title={'Add New Card'} trigger={children} onOpenChange={setIsOpen} isOpen={isOpen}>
      <form onSubmit={onSubmitForm}>
        <Modal.Body>
          <Select
            items={['Text', 'Picture']}
            label={'Choose a question format'}
            value={type}
            placeholder={type}
            onChange={value => setType(value)}
            fullWidth
          />
          {questionType}
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

const ImagePreviewUploader = () => {
  const {
    fileInputRef: questionInputRef,
    file: questionImg,
    openFileInput: openQuestionInput,
    handleFileChange: onChangeQuestionImg,
  } = useImageUploader('')

  const {
    fileInputRef: answerInputRef,
    file: answerImg,
    openFileInput: openAnswerInput,
    handleFileChange: onChangeAnswerImg,
  } = useImageUploader('')

  return (
    <>
      <Label style={{ marginTop: '3px' }}>
        <Typography variant={'subtitle2'}>Question:</Typography>
      </Label>
      {questionImg && (
        <img src={questionImg} alt="question image" style={{ width: '100%', height: '120px' }} />
      )}
      <Button variant={'secondary'} fullWidth onClick={openQuestionInput}>
        <input
          hidden
          accept="image/png, image/jpeg"
          type="file"
          ref={questionInputRef}
          onChange={onChangeQuestionImg}
        />
        <Typography variant={'subtitle2'}>Change Cover</Typography>
      </Button>
      <Label>
        <Typography variant={'subtitle2'}>Answer:</Typography>
      </Label>
      {answerImg && (
        <img src={answerImg} alt="answer image" style={{ width: '100%', height: '120px' }} />
      )}
      <Button
        variant={'secondary'}
        fullWidth
        onClick={openAnswerInput}
        style={{ marginBottom: '3px' }}
      >
        <input
          hidden
          accept="image/png, image/jpeg"
          type="file"
          ref={answerInputRef}
          onChange={onChangeAnswerImg}
        />
        <Typography variant={'subtitle2'}>Change Cover</Typography>
      </Button>
    </>
  )
}
