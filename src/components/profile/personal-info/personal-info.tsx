import { FC } from 'react'

import s from './personal-info.module.scss'

import { LogoutIcon, PencilIcon } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { useImageUploader } from '@/components/ui/avatar/useImageUploader.ts'
import { Card } from '@/components/ui/card'
import { EditableText, useEditableText } from '@/components/ui/editeble-text'

export type PersonalInfoPropsType = {
  userName: string
  userEmail: string
  onLogout: () => void
  avatar: string
  onSave: (name: string, avatar: string) => void
}

export const PersonalInfo: FC<PersonalInfoPropsType> = props => {
  const { userName, userEmail, avatar, onLogout, onSave } = props
  const { activateEditMode, setEditMode, editMode, value: editableText } = useEditableText(userName)
  const { file, handleFileChange, openFileInput, fileInputRef } = useImageUploader(avatar)
  const onButtonSaveHandler = () => {
    console.log(editableText)
    onSave(editableText ?? userName, '')
    setEditMode(false)
  }

  return (
    <Card className={`${s.card} ${editMode && s.editMode}`}>
      <Typography variant="large" as="h1" className={s.title}>
        Personal Information
      </Typography>
      <Avatar src={file} size="6rem" />
      {!editMode ? (
        <>
          <div className={s.edit_avtar}>
            <input
              type="file"
              className={s.reset_input}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <PencilIcon onClick={openFileInput} style={{ cursor: 'pointer' }} />
          </div>
          <div className={s.userName_container}>
            <Typography as="h1" variant="h1">
              {userName}
            </Typography>
            <PencilIcon onClick={activateEditMode} style={{ cursor: 'pointer' }} />
          </div>
          <Typography variant="body2" className={s.email}>
            {userEmail}
          </Typography>

          <Button variant={'secondary'} className={s.btn} onClick={onLogout}>
            <LogoutIcon />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </>
      ) : (
        <EditableText onButtonSave={onButtonSaveHandler} text={editableText} />
      )}
    </Card>
  )
}
