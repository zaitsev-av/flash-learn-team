import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { v4 } from 'uuid'

import s from './learn-desk.module.scss'

import { useImageOpen } from '@/common'
import { Button, Card, ImageModal, RadioGroup } from '@/components'
import { RadioGroupItemType } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'

type LearnPackPropsType = {
  deckName: string
  question: string
  questionImg: string
  attempts: string | number
  answer: string
  answerImg: string
  loadNextQuestion: () => void
  onChange?: (value: string) => void
  value?: string
}

export const LearnDesk: FC<LearnPackPropsType> = props => {
  const {
    deckName,
    question,
    attempts,
    answer,
    loadNextQuestion,
    onChange,
    value,
    questionImg,
    answerImg,
  } = props

  const [showAnswer, setShowAnswer] = useState(false)
  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()
  const classNames = {
    container: clsx(s.container),
    question: clsx(s.question),
    attempts: clsx(s.attempts),
    answer: clsx(s.answer),
  }
  const handleNextQuestion = () => {
    setShowAnswer(false)
    loadNextQuestion()
  }

  return (
    <Card className={classNames.container}>
      <ImageModal
        src={image}
        alt={'image'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
      <Typography variant={'large'} style={{ textAlign: 'center' }}>
        Learn {deckName}
      </Typography>

      <Typography variant={'body1'} className={classNames.question}>
        <Typography variant={'subtitle1'}>Question: </Typography>
        {question}
        {questionImg !== null && (
          <img
            src={questionImg}
            alt="question"
            width={350}
            height={200}
            onClick={() => openImageInModal(questionImg)}
          />
        )}
      </Typography>

      <Typography variant={'body2'} className={classNames.attempts}>
        Number of attempts to answer the question: {attempts}
      </Typography>

      {!showAnswer ? (
        <Button
          variant={'primary'}
          className={classNames.answer}
          onClick={() => setShowAnswer(true)}
          fullWidth
        >
          Show Answer
        </Button>
      ) : (
        <AnswerFeedback
          answerImg={answerImg}
          answer={answer}
          loadNextQuestion={handleNextQuestion}
          onChange={onChange}
          value={value}
        />
      )}
    </Card>
  )
}

type AnswerFeedbackPropsType = {
  answer: string
  answerImg: string
  loadNextQuestion: () => void
  onChange?: (value: string) => void
  value?: string
}

const AnswerFeedback: FC<AnswerFeedbackPropsType> = props => {
  const { answer, loadNextQuestion, onChange, value, answerImg } = props
  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()
  const classNames = {
    answer: clsx(s.answer),
    feedback: clsx(s.feedback),
    next: clsx(s.next_question),
    radioGroup: s.radioGroup,
  }

  const items: RadioGroupItemType[] = [
    { id: v4(), label: 'Did not know', value: '5' },
    { id: v4(), label: 'Forgot', value: '4' },
    { id: v4(), label: 'A lot of thought', value: '3' },
    { id: v4(), label: 'Confused', value: '2' },
    { id: v4(), label: 'Knew the answer', value: '1' },
  ]

  return (
    <>
      <ImageModal
        src={image}
        alt={'image'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
      <Typography variant={'body1'} className={classNames.answer}>
        <Typography variant={'subtitle1'}>Answer: </Typography>
        {answer}
        {answerImg !== null && (
          <img
            src={answerImg}
            alt="question"
            width={350}
            height={200}
            onClick={() => openImageInModal(answerImg)}
          />
        )}
      </Typography>

      <Typography variant={'subtitle1'} className={classNames.feedback}>
        Rate yourself:
      </Typography>

      <RadioGroup
        items={items}
        className={classNames.radioGroup}
        onChange={onChange}
        value={value}
      />
      <Button variant={'primary'} className={classNames.next} onClick={loadNextQuestion} fullWidth>
        Next Question
      </Button>
    </>
  )
}
