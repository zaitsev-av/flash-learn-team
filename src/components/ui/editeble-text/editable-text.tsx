import { ChangeEvent, FC, useState } from 'react'

import s from './editable-text.module.scss'

import { Button, TextField } from '@/components'

export type EditableTextPropsType = {
  text: string | undefined
}
export const EditableText: FC<EditableTextPropsType> = props => {
  const { text } = props
  const [value, setValue] = useState<string | undefined>(text)
  const [error, setError] = useState<string | undefined>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const disableEditMode = () => {
    if (value) {
      if (value.trim() !== '') {
        // dispatch отправим в стейт
        // setEditMode(false) получить из пропсов
        setError('')
      } else {
        setError('Nickname in required')
      }
    }
  }

  return (
    <>
      <TextField
        title={'Nickmame'}
        inputType={'text'}
        value={value}
        onChange={handleInputChange}
        error={error}
        autoFocus
      />
      <Button variant={'primary'} fullWidth={true} onClick={disableEditMode} className={s.btn}>
        Save Changes
      </Button>
      {error && <span className={s.error}>{}</span>}
    </>
  )
}
