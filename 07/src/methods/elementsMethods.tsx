import {
  BaseBlock,
  ElementType,
  HorizontalAlignType,
  ImageBlock,
  ImageTypeVariation,
  Page,
  PrimitiveType,
  ShapeBlock,
  TextBlock,
  VerticalAlignType,
} from '../model/main'
import {
  circleBorder,
  circleColor,
  rectangleBorder,
  rectanglecolor,
  triangleColor,
} from '../tests/maxTests'
import { v4 as uuidv4 } from 'uuid'

const addTextElement = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
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
        value: 'MotoMoto',
        color: {
          hex: '#FF0000',
        },
        fontSize: 16,
        fontFamily: 'Arial',
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
      id: String(uuidv4()),
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addImageElement = (page: Page, newElement: string) => {
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
        width: 640,
        height: 480,
      },
      scale: 1,
      id: String(uuidv4()),
      data: {
        image: { data: newElement, type: ImageTypeVariation.BASE64 },
        size: {
          width: 640,
          height: 480,
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addBackImageElement = (page: Page, newImage: string) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    slideCur.slideBackground.url = newImage
    slideCur.slideBackground.color.hex = ''

    const updatedSlides = page.slides.map((slide) => {
      if (slide.slideID === page.selection.slideID) {
        return slideCur
      } else {
        return slide
      }
    })

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addCircleElement = (page: Page) => {
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
        strokeColor: '#000000',
        strokeWidth: 0,
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addRectangleElement = (page: Page) => {
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
        primitiveType: PrimitiveType.RECTANGLE,
        color: rectanglecolor,
        strokeColor: '#000000',
        strokeWidth: 0,
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addTriangleElement = (page: Page) => {
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
        primitiveType: PrimitiveType.TRIANGLE,
        color: triangleColor,
        strokeColor: '#000000',
        strokeWidth: 0,
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const selectElement = (page: Page, elementID: string) => {
  if (elementID === page.selection.elementID) {
    return {
      ...page,
      selection: {
        ...page.selection,
        elementID: '',
      },
    }
  } else {
    return {
      ...page,
      selection: {
        ...page.selection,
        elementID: elementID,
      },
    }
  }
}

const removeElement = (page: Page) => {
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const onColorChange = (page: Page, newColor: string) => {
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}
const onStrokeWidthChange = (page: Page, width: string) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )
    if (elemCur && elemCur.elementType === ElementType.SHAPE) {
      const newWidth = Number(width)
      elemCur.data.strokeWidth = newWidth

      const updatedObjects = slideCur.slideObjects.map((elem) =>
        elem.id === page.selection.elementID ? elemCur : elem,
      )

      const updatedSlides = page.slides.map((slide) => {
        if (slide.slideID === page.selection.slideID) {
          return { ...slide, slideObjects: updatedObjects }
        } else {
          return slide
        }
      })
      console.log(elemCur.data.strokeWidth)
      return {
        ...page,
        slides: updatedSlides,
      }
    }
  }
}

const onElemChange = (page: Page, newColor: string) => {
  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )

  if (slideCur) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (
      elemCur &&
      (elemCur.elementType === ElementType.SHAPE ||
        elemCur.elementType === ElementType.TEXT)
    ) {
      console.log(elemCur)

      // Создаем новый объект с обновленным цветом
      const updatedElemCur = {
        ...elemCur,
        data: {
          ...elemCur.data,
          color: {
            ...elemCur.data.color,
            hex: newColor,
          },
        },
      }

      const updatedObjects = slideCur.slideObjects.map((elem) =>
        elem.id === page.selection.elementID ? updatedElemCur : elem,
      )

      const updatedSlides = page.slides.map((slide) =>
        slide.slideID === slideCur.slideID
          ? { ...slide, slideObjects: updatedObjects }
          : slide,
      )

      return {
        ...page,
        slides: updatedSlides,
      }
    } else {
      const updatedSlides = page.slides.map((slide) =>
        slide.slideID === slideCur.slideID ? { ...slide, slideCur } : slide,
      )

      return {
        ...page,
        slides: updatedSlides,
      }
    }
  }
}

const onStrokeColorChange = (page: Page, newColor: string) => {
  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )

  if (slideCur) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.SHAPE) {
      console.log(elemCur)
      elemCur.data.strokeColor = newColor

      const updatedElemCur = {
        ...elemCur,
        data: {
          ...elemCur.data,
          strokeColor: newColor,
        },
      }

      const updatedObjects = slideCur.slideObjects.map((elem) =>
        elem.id === page.selection.elementID ? updatedElemCur : elem,
      )

      const updatedSlides = page.slides.map((slide) =>
        slide.slideID === slideCur.slideID
          ? { ...slide, slideObjects: updatedObjects }
          : slide,
      )

      return {
        ...page,
        slides: updatedSlides,
      }
    } else {
      const updatedSlides = page.slides.map((slide) =>
        slide.slideID === slideCur.slideID ? { ...slide, slideCur } : slide,
      )

      return {
        ...page,
        slides: updatedSlides,
      }
    }
  }
}

type ObjectData = {
  objectId: string
  newRect: BaseBlock
}

function updateObjectRect(page: Page, id: string, rect: BaseBlock) {
  const newObjectData: ObjectData = {
    objectId: id,
    newRect: rect,
  }

  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  const updatedSlides = page.slides

  if (slideCur !== null) {
    const selectedIndex = slideCur.slideObjects.findIndex(function (obj) {
      if (obj.id === id) {
        return obj
      }
    })

    const selectedIndexSlide = page.slides.findIndex(function (slide) {
      if (slide.slideID === page.selection.slideID) {
        return slide
      }
    })

    slideCur.slideObjects[selectedIndex].startDot = {
      ...newObjectData.newRect.startDot,
    }
    slideCur.slideObjects[selectedIndex].size = {
      ...newObjectData.newRect.size,
    }

    updatedSlides[selectedIndexSlide] = slideCur

    return {
      ...page,
      slides: updatedSlides,
    }
  }

  return page
}

export {
  selectElement,
  addTextElement,
  addImageElement,
  addBackImageElement,
  addCircleElement,
  addRectangleElement,
  addTriangleElement,
  onStrokeWidthChange,
  removeElement,
  onColorChange,
  onStrokeColorChange,
  onElemChange,
  updateObjectRect,
}
