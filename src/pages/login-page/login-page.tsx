import { FC } from 'react'

import { LoginForm } from '@/components/auth'
import { Page } from '@/components/ui/page'

export const LoginPage: FC = () => {
  return (
    <Page>
      <LoginForm onSubmit={() => {}} />
    </Page>
  )
}
