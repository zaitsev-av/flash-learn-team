import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAuthToken } from '@/app/hooks/useAuthToken.ts'
import { LoginForm } from '@/components/auth'
import { Page } from '@/components/ui/page'
import { useLoginMutation } from '@/services/auth'

export const LoginPage: FC = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const { setToken } = useAuthToken()
  const handleLogin = (args: any) => {
    return login(args)
      .unwrap()
      .then(res => {
        setToken(res.accessToken)
        toast.success('Вы успешно авторизовались!')
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <Page>
      <LoginForm onSubmit={handleLogin} />
    </Page>
  )
}
