import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { v4 } from 'uuid'

import s from './learn-desk.module.scss'

import { Button, Card, RadioGroup, Typography } from '@/components'

type LearnPackPropsType = {
  packName: string
  question: string
  attempts: string | number
  answer: string
  // onSubmit: (data: Form) => void
}

export const LearnDesk: FC<LearnPackPropsType> = props => {
  const { packName, question, attempts, answer } = props
  const [showAnswer, setShowAnswer] = useState(false)

  const classNames = {
    container: clsx(s.container),
    question: clsx(s.question),
    attempts: clsx(s.attempts),
    answer_btn: clsx(s.answer_btn),
  }

  return (
    <Card className={classNames.container}>
      <Typography variant={'large'} style={{ textAlign: 'center' }}>
        Learn {packName}
      </Typography>
      <Typography variant={'body1'} className={classNames.question}>
        Question: {question}
      </Typography>
      <Typography variant={'body2'} className={classNames.attempts}>
        Number of attempts to answer the question: {attempts}
      </Typography>
      {!showAnswer ? (
        <Button
          variant={'primary'}
          className={s.answer}
          onClick={() => setShowAnswer(true)}
          fullWidth
        >
          Show Answer
        </Button>
      ) : (
        <AnswerFeedback answer={answer} />
      )}
    </Card>
  )
}

type AnswerFeedbackPropsType = {
  answer: string
}

const AnswerFeedback: FC<AnswerFeedbackPropsType> = props => {
  const { answer } = props
  const items = [
    { id: v4(), label: 'Did not know', value: 'value1' },
    { id: v4(), label: 'Forgot', value: 'value2' },
    { id: v4(), label: 'A lot of thought', value: 'value3' },
    { id: v4(), label: 'Confused', value: 'value4' },
    { id: v4(), label: 'Knew the answer', value: 'value5' },
  ]

  return (
    <>
      <Typography variant={'body1'} className={s.answer}>
        Answer:{answer}
      </Typography>
      <Typography variant={'subtitle1'} className={s.feedback}>
        Rate yourself:
      </Typography>
      <RadioGroup items={items} onChange={() => {}} value={'value'} />
      <Button variant={'primary'} className={s.next_question} fullWidth>
        Next Question
      </Button>
    </>
  )
}
