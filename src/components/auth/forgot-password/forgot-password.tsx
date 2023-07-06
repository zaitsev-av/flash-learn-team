import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { forgotPasswordSchema } from './forgot-password-schema.ts'
import s from './forgot-password.module.scss'

import { ControlledTextField, Typography } from '@/components'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type Form = z.infer<typeof forgotPasswordSchema>
type ForgotPasswordPropsType = {
  onSubmit: (data: Form) => void
}
export const ForgotPassword: FC<ForgotPasswordPropsType> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Form>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onSubmit',
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({ email: data.email })
    // eslint-disable-next-line no-console
    console.log('login-form', data.email)
    reset({
      email: '',
    })
  })

  // eslint-disable-next-line no-console
  console.log(errors)

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          name={'email'}
          control={control}
          inputType={'text'}
          title={'Email'}
          containerProps={{ className: s.textField }}
        />
        <Typography variant="body2" className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button type={'submit'} fullWidth={true}>
          Send Instructions
        </Button>
      </form>
      <div className={s.formFooter}>
        <Typography variant="body2" className={s.rememberPassword}>
          Did you remember your password?
        </Typography>

        <Typography as={'a'} href={'/login'} className={s.link}>
          Try logging in
        </Typography>
      </div>
    </Card>
  )
}
