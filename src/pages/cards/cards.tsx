import { clsx } from 'clsx'

import s from './cards.module.scss'

import { Button, DeckEditMenu, TextField, Typography } from '@/components'

export const Cards = () => {
  const classNames = {
    header: clsx(s.headerPage),
  }

  return (
    <div style={{ width: '1000px' }}>
      <div className={classNames.header}>
        <Typography variant={'large'} style={{ display: 'flex' }}>
          My pack
          <DeckEditMenu onEdit={() => {}} onDelete={() => {}} />
        </Typography>
        <Button variant={'primary'}>Add New Card</Button>
      </div>
      <TextField title={''} inputType={'search'} />
    </div>
  )
}
