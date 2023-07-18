import { useNavigate } from 'react-router-dom'

import { RegistrationForm } from '@/components/auth'
import { Page } from '@/components/ui/page'
import { ArgsSignUpType } from '@/services/auth/auth.api.types.ts'

export const SignUpPage = () => {
  const navigate = useNavigate()

  const onSubmitForm = async (data: ArgsSignUpType) => {
    try {
      // const res = await signUp(data).unwrap()
      data
      // console.log(res)
      navigate('/sign-in')
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <Page>
      <RegistrationForm onSubmit={onSubmitForm} />
    </Page>
  )
}
