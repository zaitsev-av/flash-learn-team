import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { signUpSchema } from './schema.ts'
import s from './sign-up-form.module.scss'

import { Button, Card, ControlledTextField, Typography } from '@/components'

type Form = z.infer<typeof signUpSchema>

const defaultValues: Form = {
  email: '',
  password: '',
  confirmPassword: '',
}

type PropsType = {
  onSubmit: (data: Omit<Form, 'confirmPassword'>) => void
}
export const SignUpForm: FC<PropsType> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<Form>({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
    defaultValues,
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit({ email: data.email, password: data.password })
    reset(defaultValues)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={onSubmitForm}>
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
        <Typography as={Link} to={'/sign-in'} variant={'link1'} className={s.footerLink}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
