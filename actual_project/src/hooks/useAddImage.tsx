import {
  ImageBlock,
  Page,
  Slide,
  ElementType,
  ImageTypeVariation,
} from '../model/main'

import { PageContext } from '../context/page'
import { useContext } from 'react'

const useAddImage = (presentationData: Page) => {
  const { page, setPage } = useContext(PageContext)

  const addImage = (newElement: string) => {
    const newImage: ImageBlock = {
      startDot: {
        x: 23,
        y: 47,
      },
      size: {
        width: 640,
        height: 480,
      },
      scale: 1,
      id: String(Date.now()),
      data: {
        image: { data: newElement, type: ImageTypeVariation.BASE64 },
        size: {
          width: 640,
          height: 480,
        },
      },
      elementType: ElementType.IMAGE,
    }

    const updatedSlides = presentationData.slides.map(
      (slide: Slide, index: number) => {
        if (index === 0) {
          return {
            ...slide,
            slideObjects: [...slide.slideObjects, newImage],
          }
        }
        return slide
      },
    )

    setPage({
      ...page,
      slides: updatedSlides,
    })
  }

  return addImage
}

export default useAddImage
