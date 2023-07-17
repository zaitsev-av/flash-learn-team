import { useNavigate } from 'react-router-dom'

import { RegistrationForm } from '@/components/auth'
import { Page } from '@/components/ui/Page/page.tsx'
import { useSignUpMutation } from '@/services/auth/auth.api.ts'
import { ArgsSignUpType } from '@/services/auth/auth.api.types.ts'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const onSubmitForm = async (data: ArgsSignUpType) => {
    try {
      const res = await signUp(data).unwrap()

      console.log(res)
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <RegistrationForm onSubmit={onSubmitForm} />
    </Page>
  )
}
