import { useNavigate } from 'react-router-dom'

import { SignUpForm } from '@/components/auth'
import { Page } from '@/components/ui/page'
import { useSignUpMutation } from '@/services/auth/auth.api.ts'
import { ArgsSignUpType } from '@/services/auth/auth.api.types.ts'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()
  const onSubmitForm = async (data: ArgsSignUpType) => {
    try {
      const res = await signUp(data).unwrap()

      console.log(res)
      navigate('/sign-up')
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <Page>
      <SignUpForm onSubmit={onSubmitForm} />
    </Page>
  )
}
