import { FC } from 'react'

import { clsx } from 'clsx'

import s from './learn-desk.module.scss'

import { Card, Typography } from '@/components'

type LearnPackPropsType = {
  packName: string
  // onSubmit: (data: Form) => void
}

export const LearnDesk: FC<LearnPackPropsType> = props => {
  const { packName } = props
  const classNames = {
    container: clsx(s.container),
  }

  return (
    <Card className={classNames.container}>
      <Typography variant={'large'} style={{ textAlign: 'center' }}>
        Learn {packName}
      </Typography>
    </Card>
  )
}
