import { FC } from 'react'

import { useLocation } from 'react-router-dom'

import { Page } from '@/components'
import { CheckEmail } from '@/components/auth'

export const CheckEmailPage: FC = () => {
  const { state } = useLocation()

  return (
    <Page>
      <CheckEmail email={state} />
    </Page>
  )
}
