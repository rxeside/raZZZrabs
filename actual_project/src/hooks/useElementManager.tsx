import { useContext } from 'react'
import { PageContext } from '../context/page'
import {
  ElementType,
  HorizontalAlignType,
  ImageBlock,
  PrimitiveType,
  ShapeBlock,
  Slide,
  TextBlock,
  VerticalAlignType,
} from '../model/main'
import {
  circleBorder,
  circleColor,
  imageBase64BlockBorder,
  imageBase64BlockDataType,
} from '../tests/maxTests'

type useElementManagementReturnType = {
  selectElement: (elementID: string) => void
  addTextElement: (slide: Slide | null) => void
  addImageElement: (slide: Slide | null) => void
  addShapeElement: (slide: Slide | null) => void
}

const useElementManagement = (): useElementManagementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const addTextElement = (slide: Slide | null) => {
    if (slide != null) {
      const newElement: TextBlock = {
        startDot: {
          x: 100,
          y: 100,
        },
        scale: 1,
        size: {
          width: 250,
          height: 100,
        },
        data: {
          value: '',
          color: {
            hex: '#FF0000',
            opacity: 0,
          },
          fontSize: 16,
          verticalAlign: VerticalAlignType.TOP,
          horizontalAlign: HorizontalAlignType.RIGHT,
          outline: {
            bold: false,
            italic: false,
            underline: false,
          },
          size: {
            width: 250,
            height: 100,
          },
        },
        id: String(slide.slideObjects.length + 1),
        elementType: ElementType.TEXT,
      }

      slide.slideObjects = [...slide.slideObjects, newElement]

      const updatedSlides = [...page.slides]

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const addImageElement = (slide: Slide | null) => {
    if (slide != null) {
      const newElement: ImageBlock = {
        startDot: {
          x: 23,
          y: 47,
        },
        size: {
          width: 640,
          height: 480,
        },
        scale: 1,
        id: String(slide.slideObjects.length + 1),
        data: {
          image: imageBase64BlockDataType,
          border: imageBase64BlockBorder,
          size: {
            width: 640,
            height: 480,
          },
        },
        elementType: ElementType.IMAGE,
      }

      slide.slideObjects = [...slide.slideObjects, newElement]

      const updatedSlides = [...page.slides]

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const addShapeElement = (slide: Slide | null) => {
    if (slide != null) {
      const newElement: ShapeBlock = {
        startDot: {
          x: 12,
          y: 256,
        },
        size: {
          width: 175,
          height: 100,
        },
        scale: 1,
        id: String(slide.slideObjects.length + 1),
        data: {
          primitiveType: PrimitiveType.CIRCLE,
          color: circleColor,
          border: circleBorder,
          size: {
            width: 175,
            height: 100,
          },
        },
        elementType: ElementType.SHAPE,
      }

      slide.slideObjects = [...slide.slideObjects, newElement]

      const updatedSlides = [...page.slides]

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const selectElement = (elementID: string) => {
    console.log(elementID)
    setPage({
      ...page,
      selection: {
        ...page.selection,
        elementID: elementID,
      },
    })
  }

  return {
    selectElement,
    addTextElement,
    addImageElement,
    addShapeElement,
  }
}

export default useElementManagement
