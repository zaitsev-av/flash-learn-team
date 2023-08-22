import { FC } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon } from '@/assets'
import { Button, Typography } from '@/components'
import { PersonalInfo } from '@/components/profile'
import s from '@/components/profile/personal-info/personal-info.module.scss'
import { Page } from '@/components/ui/page'
import { useAuthMeQuery, useLogoutMutation, useUpdateUserMutation } from '@/services'

export const PersonalInfoPage: FC = () => {
  const navigate = useNavigate()
  const { data: userData } = useAuthMeQuery()
  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()
  const updateAvatar = (avatar: any) => {
    const data = new FormData()

    data.append('avatar', avatar)
    updateUser(data)
  }
  const updateName = (name: string) => {
    const data = new FormData()

    data.append('name', name)
    updateUser(data)
  }

  const classNames = {
    back: clsx(s.back),
    backArrow: clsx(s.content),
  }

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <Page>
      <Button variant={'link'} onClick={navigateBack} className={classNames.back}>
        <Typography variant={'body2'} className={classNames.backArrow}>
          <ArrowLeftIcon /> Go back
        </Typography>
      </Button>
      <PersonalInfo
        userName={userData?.name ?? ''}
        userEmail={userData?.email ?? ''}
        avatar={userData?.avatar ?? ''}
        onLogout={logout}
        updateAvatar={updateAvatar}
        updateName={updateName}
      />
    </Page>
  )
}
