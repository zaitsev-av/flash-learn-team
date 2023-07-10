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
  const disableEditMode = () => {
    if (!value) return

    if (!value.trim()) return setError('Nickname in required')

    // dispatch отправим в стейт
    setError('')
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
