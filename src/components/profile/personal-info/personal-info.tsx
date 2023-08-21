import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './personal-info.module.scss'

import { LogoutIcon, PencilIcon } from '@/assets'
import { Avatar, Button, Typography } from '@/components'
import { personalInfo } from '@/components/profile/personal-info/personal-info-shema.ts'
import { Card } from '@/components/ui/card'
import { ControlledInputFile } from '@/components/ui/controlled/controlled-input-file.tsx'
import { EditableText, useEditableText } from '@/components/ui/editeble-text'

export type PersonalInfoPropsType = {
  userName: string
  userEmail: string
  onLogout: () => void
  avatar: string
  updateAvatar: (avatar: any) => void
}
export type PersonalInfoForm = z.infer<typeof personalInfo>
const defaultValues: PersonalInfoForm = {
  // name: '',
  avatar: '',
}

export const PersonalInfo: FC<PersonalInfoPropsType> = props => {
  const { userName, userEmail, avatar, onLogout, updateAvatar } = props
  const {
    activateEditMode,
    setEditMode,
    editMode,
    handleInputChange,
    value: editableText,
  } = useEditableText(userName)
  // const { file, handleFileChange, openFileInput, fileInputRef } = useImageUploader(avatar)
  // const onButtonSaveHandler = () => {
  //   console.log(editableText)
  //   onSave(editableText ?? userName, '')
  //   setEditMode(false)
  // }
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<PersonalInfoForm>({
    resolver: zodResolver(personalInfo),
    mode: 'onChange',
    defaultValues,
  })

  console.log(errors, 'errors')

  const onSubmitForm = handleSubmit(data => {
    console.log(data)
    updateAvatar(data)
    // setIsOpen(false)
    reset(defaultValues)
  })

  return (
    <Card className={`${s.card} ${editMode && s.editMode}`}>
      <Typography variant="large" as="h1" className={s.title}>
        Personal Information
      </Typography>
      <Avatar src={avatar} size="6rem" />
      {!editMode ? (
        <>
          <form className={s.edit_avtar} onChange={onSubmitForm}>
            <ControlledInputFile name={'avatar'} control={control}>
              {onClick => <PencilIcon onClick={onClick} style={{ cursor: 'pointer' }} />}
            </ControlledInputFile>
          </form>
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
        <EditableText
          onChange={handleInputChange}
          onButtonSave={onSubmitForm}
          text={editableText}
          setEditMode={setEditMode}
        />
      )}
    </Card>
  )
}
