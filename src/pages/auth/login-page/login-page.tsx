import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginForm } from '@/components/auth'
import { Page } from '@/components/ui/page'
import { useLoginMutation } from '@/services/auth'

export const LoginPage: FC = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = async (args: any) => {
    try {
      await login(args).unwrap()
      toast.success('Вы успешно авторизовались!')
      console.log('navigate')
      navigate('/')
    } catch (err) {
      return console.log(err)
    }
  }

  return (
    <Page>
      <LoginForm onSubmit={handleLogin} />
    </Page>
  )
}
