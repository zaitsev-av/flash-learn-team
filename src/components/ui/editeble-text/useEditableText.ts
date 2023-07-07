import { ChangeEvent, useState } from 'react'

export const useEditableText = (text: '' | undefined | string) => {
  const [value, setValue] = useState<string | undefined>(text)
  const [error, setError] = useState<string | undefined>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  const activateEditMode = () => {
    setEditMode(true)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const disableEditMode = (callback: Function) => {
    if (value) {
      if (value.trim() !== '') {
        // dispatch отправим в стейт
        callback(false)
        setError('')
      } else {
        setError('Nickname in required')
      }
    }
  }

  return {
    setError,
    setValue,
    setEditMode,
    error,
    value,
    editMode,
    activateEditMode,
    handleInputChange,
    disableEditMode,
  }
}
