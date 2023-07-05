import { FC } from 'react'

import s from './personal-info.module.scss'

import { LogoutIcon, PencilIcon } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { Card } from '@/components/ui/card'

export const PersonalInfo: FC = () => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal Information
      </Typography>
      <Avatar variant={'header'} className={s.avatar} />
      <div className={s.edit_avtar}>
        <PencilIcon />
      </div>
      <div className={s.userName_container}>
        <Typography as={'h1'} variant={'h1'}>
          UserName
        </Typography>
        <PencilIcon />
      </div>
      <Typography variant="body2" className={s.email}>
        user_email@blabla.com
      </Typography>

      <Button variant={'secondary'} className={s.btn}>
        <LogoutIcon />
        <Typography variant={'subtitle2'}>Logout</Typography>
      </Button>
    </Card>
  )
}
