import { useState } from 'react'

const useSlideBackground = () => {
  const [slideBackground, setSlideBackground] = useState('#ffffff') // Устанавливаем начальный цвет фона

  const changeSlideBackground = (color: string) => {
    setSlideBackground(color)
  }

  return {
    slideBackground,
    changeSlideBackground,
  }
}

export default useSlideBackground
