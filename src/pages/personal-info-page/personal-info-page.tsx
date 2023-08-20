import { FC } from 'react'

import { PersonalInfo } from '@/components/profile'
import { Page } from '@/components/ui/page'
import { useAuthMeQuery, useLogoutMutation, useUpdateUserMutation } from '@/services'

export const PersonalInfoPage: FC = () => {
  const { data: userData } = useAuthMeQuery()
  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()
  const onSaveHandler = (data: FormData) => {
    updateUser({ data, email: userData?.email ?? '' })
  }
  //todo заменть все на formData

  return (
    <Page>
      <PersonalInfo
        userName={userData?.name ?? ''}
        userEmail={userData?.email ?? ''}
        avatar={userData?.avatar ?? ''}
        onLogout={logout}
        onSave={onSaveHandler}
      />
    </Page>
  )
}
