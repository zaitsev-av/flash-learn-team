import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './registration-form.module.scss'

import { Button, Card, ControlledTextField, Typography } from '@/components'

const schema = z.object({
  email: z.string().email('Email is not valid').trim().nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'You must agree to the terms and conditions' }
    },
  }),
})

type Form = z.infer<typeof schema>
export const RegistrationForm = () => {
  const { control, handleSubmit } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })
  const onSubmit = handleSubmit(data => console.log(data))

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
