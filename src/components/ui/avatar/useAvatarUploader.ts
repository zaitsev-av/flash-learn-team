import { ChangeEvent, useRef, useState } from 'react'

export const useAvatarUploader = () => {
  const [file, setFile] = useState<string>(
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
  )
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
