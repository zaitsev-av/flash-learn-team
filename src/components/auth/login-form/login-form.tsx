import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { LookPassword } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field.tsx'

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
  const onSubmit = handleSubmit(data => console.log(data))

  const {} = useForm()

  // eslint-disable-next-line no-console
  console.log(errors)

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <ControlledTextField name={'login'} control={control} />
        <ControlledTextField name={'password'} control={control} variant={'password'}>
          <LookPassword />
        </ControlledTextField>
        <Button type={'submit'} fullWidth={true}>
          submit
        </Button>
      </form>
    </Card>
  )
}
