import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/auth'
import { Page } from '@/components/ui/page'
import { useLoginMutation } from '@/services/auth'

export const LoginPage: FC = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = (args: any) => {
    return login(args)
      .unwrap()
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <Page>
      <LoginForm onSubmit={handleLogin} />
    </Page>
  )
}
