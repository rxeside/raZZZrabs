import { useContext, useState } from 'react'
import { PageContext } from '../context/page'
import { ElementType, ImageBlock, ImageTypeVariation } from '../model/main'

const useAddImage = () => {
  const { page, setPage } = useContext(PageContext)
  const [imageDimensions, setImageDimensions] = useState({
    width: 640,
    height: 480,
  })

  const addImage = (newElement: string) => {
    const image = new Image()
    image.src = newElement

    image.onload = () => {
      const slideCur =
        page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
        null

      if (slideCur != null) {
        const newImage: ImageBlock = {
          startDot: {
            x: 23,
            y: 47,
          },
          size: {
            width: image.width, // Используем значения изображения
            height: image.height,
          },
          scale: 1,
          id: String(Date.now()),
          data: {
            image: { data: newElement, type: ImageTypeVariation.BASE64 },
            size: {
              width: image.width,
              height: image.height,
            },
          },
          elementType: ElementType.IMAGE,
        }

        const updatedSlideObjects = [...slideCur.slideObjects, newImage]

        const updatedSlides = page.slides.map((slide) => {
          if (slide.slideID === slideCur.slideID) {
            return { ...slide, slideObjects: updatedSlideObjects }
          } else {
            return slide
          }
        })

        setPage({
          ...page,
          slides: updatedSlides,
        })

        setImageDimensions({ width: image.width, height: image.height })
      }
    }
  }

  return { addImage, imageDimensions }
}

export default useAddImage
