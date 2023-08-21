import { FC } from 'react'

import { PersonalInfo } from '@/components/profile'
import { Page } from '@/components/ui/page'
import { useAuthMeQuery, useLogoutMutation, useUpdateUserMutation } from '@/services'

export const PersonalInfoPage: FC = () => {
  const { data: userData } = useAuthMeQuery()
  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()
  const updateAvatar = (avatar: any) => {
    const data = new FormData()

    data.append(avatar, 'avatar')
    data.append(userData?.email ?? '', 'email')
    data.append(userData?.name ?? '', 'name')
    updateUser(data)
  }
  //todo заменть все на formData

  return (
    <Page>
      <PersonalInfo
        userName={userData?.name ?? ''}
        userEmail={userData?.email ?? ''}
        avatar={userData?.avatar ?? ''}
        onLogout={logout}
        updateAvatar={updateAvatar}
      />
    </Page>
  )
}
