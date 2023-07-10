import { ChangeEvent, useRef, useState } from 'react'

export const useAvatarUploader = (value: string) => {
  const [file, setFile] = useState<string>(value)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  /**
   * Opens the file input dialog.
   */
  const openFileInput = () => {
    fileInputRef.current && fileInputRef.current.click()
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files?.[0]

    if (photo) {
      if (photo.type === 'image/jpeg') {
        const fileURL = URL.createObjectURL(photo)

        setFile(fileURL)
      }
    }
  }

  return {
    file,
    fileInputRef,
    handleFileChange,
    openFileInput,
  }
}
