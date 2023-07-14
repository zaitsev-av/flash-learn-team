import { FC } from 'react'

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
  const { packName, question, attempts } = props
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
      <Button variant={'primary'} className={s.answer_btn} fullWidth>
        Show Answer
      </Button>
      <AnswerFeedback answer={'This is how "This" works in JavaScript'} />
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
    { id: v4(), label: 'labKnew the answer', value: 'value5' },
  ]

  return (
    <>
      <Typography variant={'body1'}>Answer:{answer}</Typography>
      <Typography variant={'subtitle1'}>Rate yourself:</Typography>
      <RadioGroup items={items} onChange={() => {}} value={'value'} />
    </>
  )
}
