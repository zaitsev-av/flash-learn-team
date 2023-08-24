import { useState } from 'react'

export const useImageOpen = () => {
  const [isImageModalOpen, setImageModalOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const openImageInModal = (src: string) => {
    setImageModalOpen(true)
    setImage(src)
  }

  return {
    image,
    isImageModalOpen,
    openImageInModal,
    setImageModalOpen,
  }
}
