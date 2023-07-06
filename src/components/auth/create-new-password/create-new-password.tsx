import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-new-password.module.scss'
import { createNewPasswordSchema } from './schema.ts'

import { ControlledTextField, Typography } from '@/components'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
type PropsType = {
  onSubmit: (data: Form) => void
}
type Form = z.infer<typeof createNewPasswordSchema>
export const CreateNewPassword: FC<PropsType> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<Form>({
    resolver: zodResolver(createNewPasswordSchema),
    mode: 'onSubmit',
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit({ newPassword: data.newPassword })
    reset({ newPassword: '' })
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Create new password
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          control={control}
          title={'Password'}
          inputType={'password'}
          className={s.password}
          name={'newPassword'}
        />
        <Typography variant={'body2'} color={'secondary'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
