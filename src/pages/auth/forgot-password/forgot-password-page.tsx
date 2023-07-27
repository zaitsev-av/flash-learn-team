import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Page } from '@/components'
import { ForgotPassword } from '@/components/auth'
import { useRecoverPasswordMutation } from '@/services'

export const ForgotPasswordPage: FC = () => {
  const [recoveryPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const recoveryPasswordHtml =
    '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/reset-password/##token##">here</a> to recover your password</p>'

  const handleRecoveryPassword = async (data: { email: string }) => {
    await recoveryPassword({
      email: data.email,
      html: recoveryPasswordHtml,
      subject: 'Recovery password',
    })
    navigate('/check-email', { state: data.email })
  }

  return (
    <Page>
      <ForgotPassword onSubmit={data => handleRecoveryPassword(data)} />
    </Page>
  )
}
