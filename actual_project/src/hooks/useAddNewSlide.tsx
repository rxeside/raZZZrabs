import { useState } from 'react'
import { Slide } from '../model/main'

type AddSlideProps = {
  slideList: Slide[]
}

const useAddSlide = ({ slideList }: AddSlideProps) => {
  const [slides, setSlides] = useState(slideList)

  const addSlide = () => {
    const newSlide: Slide = {
      slideID: String(slides.length + 1),
      slideBackground: {
        color: {
          hex: '#FFFFFF',
          opacity: 1,
        },
      },
      slideObjects: [],
    }

    const updatedSlides = [...slides, newSlide]
    setSlides(updatedSlides)
  }

  return { slides, addSlide }
}

export { useAddSlide }
