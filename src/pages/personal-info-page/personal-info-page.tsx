import { FC } from 'react'

import { PersonalInfo } from '@/components/profile'
import { Page } from '@/components/ui/page'
import { useAuthMeQuery, useLogoutMutation, useUpdateUserMutation } from '@/services'

export const PersonalInfoPage: FC = () => {
  const { data } = useAuthMeQuery()
  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()
  const onSaveHandler = (name: string, avatar: string) => {
    console.log(name)
    updateUser({ name, email: data?.email ?? '', avatar })
  }

  return (
    <Page>
      <PersonalInfo
        userName={data?.name ?? ''}
        userEmail={data?.email ?? ''}
        avatar={data?.avatar ?? ''}
        onLogout={logout}
        onSave={onSaveHandler}
      />
    </Page>
  )
}
