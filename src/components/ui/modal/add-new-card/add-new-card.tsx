import { FC, ReactNode, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { addNewCard } from './add-new-card.ts'

import { Button, ControlledTextField, Select, Typography } from '@/components'
import { Modal } from '@/components/ui/modal'

type AddNewCardModalPropsType = {
  children: ReactNode
  onSubmit: (data: any) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
type Form = z.infer<typeof addNewCard>
const defaultValues: Form = {
  question: '',
  answer: '',
  questionImg: '',
  answerImg: '',
}

export const AddNewCard: FC<AddNewCardModalPropsType> = props => {
  const { children, onSubmit, setIsOpen, isOpen } = props
  const [type, setType] = useState<string>('Text')
  const questionInputRef = useRef<HTMLInputElement | null>(null)
  const answerInputRef = useRef<HTMLInputElement | null>(null)

  const { handleSubmit, control, reset, register } = useForm<Form>({
    resolver: zodResolver(addNewCard),
    mode: 'onSubmit',
    defaultValues,
  })

  const onSubmitForm = handleSubmit(data => {
    const formData = new FormData()

    formData.append('answer', data.answer)
    formData.append('question', data.question)
    data.answerImg[0] && formData.append('answerImg', data.answerImg[0])
    data.answerImg[0] && formData.append('questionImg', data.answerImg[0])
    onSubmit({
      formData,
      /* question: data.question,
      answer: data.answer,
      questionImg: data.questionImg[0],
      answerImg: data.answerImg[0],*/
    })
    setIsOpen(false)
    reset(defaultValues)
    console.log(data)
  })

  const openQuestionInput = () => {
    questionInputRef.current && questionInputRef.current.click()
  }

  const openAnswerInput = () => {
    answerInputRef.current && answerInputRef.current.click()
  }

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
      <>
        <Label style={{ marginTop: '3px' }}>
          <Typography variant={'subtitle2'}>Question:</Typography>
        </Label>
        {/*{questionImg && (
          <img src={questionImg} alt="question image" style={{ width: '100%', height: '120px' }} />
        )}*/}
        <label htmlFor="change-cover-question">
          <Button variant={'secondary'} fullWidth onClick={openQuestionInput}>
            <Typography variant={'subtitle2'}>Change Cover</Typography>
          </Button>
          <input
            hidden
            id="change-cover-question"
            accept="image/png, image/jpeg"
            type="file"
            {...register('questionImg')}
            style={{ display: 'none' }}
          />
        </label>
        <Label>
          <Typography variant={'subtitle2'}>Answer:</Typography>
        </Label>
        {/*       {answerImg && (
          <img src={answerImg} alt="answer image" style={{ width: '100%', height: '120px' }} />
        )}*/}
        <label htmlFor="change-cover-answer">
          <Button
            variant={'secondary'}
            fullWidth
            style={{ marginBottom: '3px' }}
            onClick={openAnswerInput}
          >
            <Typography variant={'subtitle2'}>Change Cover</Typography>
          </Button>
          <input
            hidden
            id="change-cover-answer"
            accept="image/png, image/jpeg"
            type="file"
            {...register('answerImg')}
            style={{ display: 'none' }}
          />
        </label>
      </>
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
/*type ImagePreviewUploaderProps = {
  control: Control<Form, any>
}*/
/*
const ImagePreviewUploader: FC<ImagePreviewUploaderProps> = props => {
  const { control } = props
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

  console.log(answerImg, 'answer')
  console.log(questionImg, 'question')

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
          name={'questionImg'}
          {...control}
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
          name={'answerImg'}
          {...control}
        />
        <Typography variant={'subtitle2'}>Change Cover</Typography>
      </Button>
    </>
  )
}
*/
