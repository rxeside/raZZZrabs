// Ваш компонент LoaderImage
import React, { useRef } from 'react'

interface LoaderImageProps {
  addImage: (base64Data: string) => void
  setSelectedObjectId?: (data: string) => void
}

const LoaderImage = ({ addImage, setSelectedObjectId }: LoaderImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileLoader = () => {
    if (fileInputRef.current) {
      const selectedFile = fileInputRef.current.files?.[0]

      if (selectedFile) {
        const reader = new FileReader()

        reader.onloadend = () => {
          const base64Data = reader.result as string
          if (selectedFile.type.includes('image')) {
            addImage(base64Data) // Вызываем функцию из пропсов
          }
        }
        reader.readAsDataURL(selectedFile)
      }
    }
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
    if (setSelectedObjectId) {
      setSelectedObjectId('')
    }
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} onChange={handleFileLoader} />
      <button onClick={handleClick}>Загрузить изображение</button>
    </div>
  )
}

export { LoaderImage }
