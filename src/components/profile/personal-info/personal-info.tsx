import { FC } from 'react'

import s from './personal-info.module.scss'

import { LogoutIcon, PencilIcon } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { useAvatarUploader } from '@/components/ui/avatar/useAvatarUploader.ts'
import { Card } from '@/components/ui/card'
import { EditableText, useEditableText } from '@/components/ui/editeble-text'

export type PersonalInfoPropsType = {
  userName: string
  userEmail: string
}

export const PersonalInfo: FC<PersonalInfoPropsType> = props => {
  const { userName, userEmail } = props
  const { activateEditMode, setEditMode, editMode } = useEditableText('')
  const { file, handleFileChange, openFileInput, fileInputRef } = useAvatarUploader()

  return (
    <Card className={`${s.card} ${editMode && s.editMode}`}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal Information
      </Typography>
      <Avatar label={userName} className={s.avatar} src={file} />
      {!editMode ? (
        <>
          <div className={s.edit_avtar}>
            <input
              type="file"
              className={`${s.reset_input}`}
              id="input_file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <PencilIcon onClick={openFileInput} />
          </div>
          <div className={s.userName_container}>
            <Typography as={'h1'} variant={'h1'}>
              {userName}
            </Typography>
            <PencilIcon onDoubleClick={activateEditMode} />
          </div>
          <Typography variant="body2" className={s.email}>
            {userEmail}
          </Typography>

          <Button variant={'secondary'} className={s.btn}>
            <LogoutIcon />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </>
      ) : (
        <EditableText callback={setEditMode} text={userName} />
      )}
    </Card>
  )
}
