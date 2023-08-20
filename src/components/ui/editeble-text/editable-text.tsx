import { FC } from 'react'

import { Control } from 'react-hook-form'

import s from './editable-text.module.scss'

import { Button, ControlledTextField } from '@/components'
import { PersonalInfoForm } from '@/components/profile'

export type EditableTextPropsType = {
  text: string
  onButtonSave: () => void
  setEditMode: (editMode: boolean) => void
  control: Control<PersonalInfoForm, any>
}

export const EditableText: FC<EditableTextPropsType> = props => {
  const { onButtonSave, setEditMode, control } = props

  const disableEditModeHandler = () => {
    // disableEditMode()
    setEditMode(false)
    onButtonSave()
  }

  return (
    <>
      <ControlledTextField
        title={'Nickmame'}
        inputType={'text'}
        name={'name'}
        control={control}
        autoFocus
      />
      <Button
        onClick={disableEditModeHandler}
        fullWidth={true}
        className={s.btn}
        variant={'primary'}
        type={'submit'}
      >
        Save Changes
      </Button>
      {/*{error && <span className={s.error}>{}</span>}*/}
    </>
  )
}
