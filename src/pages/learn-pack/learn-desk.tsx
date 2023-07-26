import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { v4 } from 'uuid'

import s from './learn-desk.module.scss'

import { Button, Card, RadioGroup } from '@/components'
import { Typography } from '@/components/ui/typography'

type LearnPackPropsType = {
  packName: string
  question: string
  attempts: string | number
  answer: string
  loadNextQuestion: () => void
  onChange: (value: string) => void
  value: string
}

export const LearnDesk: FC<LearnPackPropsType> = props => {
  const { packName, question, attempts, answer, loadNextQuestion, onChange, value } = props
  const [showAnswer, setShowAnswer] = useState(false)

  const classNames = {
    container: clsx(s.container),
    question: clsx(s.question),
    attempts: clsx(s.attempts),
    answer: clsx(s.answer),
  }

  return (
    <Card className={classNames.container}>
      <Typography variant={'large'} style={{ textAlign: 'center' }}>
        Learn {packName}
      </Typography>
      <Typography variant={'body1'} className={classNames.question}>
        <Typography variant={'subtitle1'}>Question: </Typography>
        {question}
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
          answer={answer}
          loadNextQuestion={loadNextQuestion}
          onChange={onChange}
          value={value}
        />
      )}
    </Card>
  )
}

type AnswerFeedbackPropsType = {
  answer: string
  loadNextQuestion: () => void
  onChange: (value: string) => void
  value: string
}

const AnswerFeedback: FC<AnswerFeedbackPropsType> = props => {
  const { answer, loadNextQuestion, onChange, value } = props
  const classNames = {
    answer: clsx(s.answer),
    feedback: clsx(s.feedback),
    next: clsx(s.next_question),
    radioGroup: s.radioGroup,
  }
  const items = [
    { id: v4(), label: 'Did not know', value: 'value1' },
    { id: v4(), label: 'Forgot', value: 'value2' },
    { id: v4(), label: 'A lot of thought', value: 'value3' },
    { id: v4(), label: 'Confused', value: 'value4' },
    { id: v4(), label: 'Knew the answer', value: 'value5' },
  ]

  return (
    <>
      <Typography variant={'body1'} className={classNames.answer}>
        <Typography variant={'subtitle1'}>Answer: </Typography>
        {answer}
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
