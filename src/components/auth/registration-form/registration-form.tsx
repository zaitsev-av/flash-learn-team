import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './registration-form.module.scss'
import { registrationSchema } from './schema.ts'

import { Button, Card, ControlledTextField, Typography } from '@/components'

type Form = z.infer<typeof registrationSchema>
export const RegistrationForm = () => {
  const { control, handleSubmit, reset } = useForm<Form>({
    resolver: zodResolver(registrationSchema),
    mode: 'onSubmit',
  })
  const onSubmit = handleSubmit(data => {
    console.log(data)
    reset()
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          title={'Email'}
          inputType={'text'}
          className={s.email}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          title={'Password'}
          inputType={'password'}
          className={s.password}
          name={'password'}
        />
        <ControlledTextField
          control={control}
          title={'Confirm Password'}
          inputType={'password'}
          className={s.confirmPassword}
          name={'confirmPassword'}
        />
        <Button variant={'primary'} type={'submit'} fullWidth={true} className={s.button}>
          Sign Up
        </Button>
      </form>
      <div className={s.footer}>
        <Typography variant={'body2'}>Already have an account?</Typography>
        <Typography as={'a'} href={'/sign-in'} variant={'link1'} className={s.footerLink}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
