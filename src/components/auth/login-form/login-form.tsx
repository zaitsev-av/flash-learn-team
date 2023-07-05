import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './login-form.module.scss'

import { ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login').min(3, 'Login must be at least 3 characters'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'You must agree to the terms and conditions' }
    },
  }),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>
export const LoginForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit(data => console.log('login-form', data))

  // eslint-disable-next-line no-console
  console.log(errors)

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Sign in
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          name={'login'}
          control={control}
          inputType={'text'}
          title={'Login'}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          name={'password'}
          control={control}
          inputType={'password'}
          title={'Password'}
          containerProps={{ className: s.textField }}
        />
        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          left={true}
          className={s.checkbox}
        />

        <Typography variant="body2" as={'a'} className={s.forgotPassword}>
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth={true}>
          Sign In
        </Button>
      </form>
      <Typography variant="body2" className={s.noAccount}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography as={'a'} href={'/sing-up'} className={s.signUp}>
        Sign Up
      </Typography>
    </Card>
  )
}
