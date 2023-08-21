import { ChangeEvent, FC } from 'react'

import s from './editable-text.module.scss'

import { Button, TextField } from '@/components'

export type EditableTextPropsType = {
  text: string
  onButtonSave: () => void
  setEditMode: (editMode: boolean) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditableText: FC<EditableTextPropsType> = props => {
  const { text, onButtonSave, setEditMode, onChange } = props

  const disableEditModeHandler = () => {
    // disableEditMode()
    setEditMode(false)
    console.log('button')
    onButtonSave()
  }

  return (
    <>
      <TextField inputType={'text'} onChange={onChange} value={text} autoFocus />
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
