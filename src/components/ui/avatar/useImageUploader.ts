import { ChangeEvent, useRef, useState } from 'react'

/**
 * The useImageUploader hook provides functionality for uploading images.
 * @param {string} value - The initial file value.
 * @returns {object} - An object with data and functions for working with image upload.
 */
export const useImageUploader = (value: string) => {
  const [file, setFile] = useState<string>(value)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  /**
   * Opens the file input dialog.
   */
  const openFileInput = () => {
    fileInputRef.current && fileInputRef.current.click()
  }

  /**
   * Handles the change of the selected file.
   * @param {ChangeEvent<HTMLInputElement>} e - The file input change event.
   */
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
