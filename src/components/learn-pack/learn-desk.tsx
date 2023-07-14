import { FC } from 'react'

import { clsx } from 'clsx'

import s from './learn-desk.module.scss'

import { Button, Card, Typography } from '@/components'

type LearnPackPropsType = {
  packName: string
  question: string
  attempts: string | number
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
    </Card>
  )
}
