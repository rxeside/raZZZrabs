import { useContext, useState } from 'react'
import { PageContext } from '../context/page'
import {
  ElementType,
  HorizontalAlignType,
  ImageBlock,
  PrimitiveType,
  ShapeBlock,
  TextBlock,
  VerticalAlignType,
} from '../model/main'
import {
  circleBorder,
  circleColor,
  imageBase64BlockBorder,
  imageBase64BlockDataType,
} from '../tests/maxTests'
import FontSelect from '../components/FontSelector/FontSelector'

type useElementManagementReturnType = {
  selectElement: (elementID: string) => void
  addTextElement: () => void
  addImageElement: () => void
  addShapeElement: () => void
  removeElement: () => void
  onColorChange: (newColor: string) => void
}

const useElementManagement = (): useElementManagementReturnType => {
  const { page, setPage } = useContext(PageContext)
  const [selectedFont, setSelectedFont] = useState('Arial')

  const handleFontChange = (font: string) => {
    setSelectedFont(font)
  }

  const addTextElement = () => {
    const slideCur =
      page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
      null
    if (slideCur != null) {
      console.log(selectedFont)
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
          font: selectedFont,
          value: 'MotoMoto',
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
        id: String(Date.now()),
        elementType: ElementType.TEXT,
      }
      slideCur.slideObjects = [...slideCur.slideObjects, newElement]

      const updatedSlides = page.slides.map((slide) => {
        if (slide.slideID === slideCur.slideID) {
          return slideCur
        } else {
          return slide
        }
      })

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const addImageElement = () => {
    const slideCur =
      page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
      null

    if (slideCur != null) {
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
        id: String(Date.now()),
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

      slideCur.slideObjects = [...slideCur.slideObjects, newElement]

      const updatedSlides = page.slides.map((slide) => {
        if (slide.slideID === slideCur.slideID) {
          return slideCur
        } else {
          return slide
        }
      })

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const addShapeElement = () => {
    const slideCur =
      page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
      null

    if (slideCur != null) {
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
        id: String(Date.now()),
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

      slideCur.slideObjects = [...slideCur.slideObjects, newElement]

      const updatedSlides = page.slides.map((slide) => {
        if (slide.slideID === slideCur.slideID) {
          return slideCur
        } else {
          return slide
        }
      })

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  const selectElement = (elementID: string) => {
    if (elementID === page.selection.elementID) {
      setPage({
        ...page,
        selection: {
          ...page.selection,
          elementID: '',
        },
      })
    } else {
      setPage({
        ...page,
        selection: {
          ...page.selection,
          elementID: elementID,
        },
      })
    }
  }

  const removeElement = () => {
    const slideCur = page.slides.find(
      (slide) => slide.slideID === page.selection.slideID,
    )

    if (slideCur) {
      const updatedSlideObjects = slideCur.slideObjects.filter(
        (elem) => elem.id !== page.selection.elementID,
      )

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
    }
  }

  const onColorChange = (newColor: string) => {
    const slideCur = page.slides.find(
      (slide) => slide.slideID === page.selection.slideID,
    )

    if (slideCur) {
      slideCur.slideBackground.color.hex = newColor
      const updatedSlides = page.slides.map((slide) => {
        if (slide.slideID === slideCur.slideID) {
          return { ...slide, slideCur }
        } else {
          return slide
        }
      })

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  return {
    selectElement,
    addTextElement,
    addImageElement,
    addShapeElement,
    removeElement,
    onColorChange,
  }
}

export default useElementManagement
