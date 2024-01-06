import {
  ElementType,
  HorizontalAlignType,
  ImageBlock,
  Page,
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
  rectangleBorder,
  rectanglecolor,
  triangleColor,
} from '../tests/maxTests'

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
          opacity: 0,
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

    return {
      ...page,
      slides: updatedSlides,
    }
  }
}

const addImageElement = (page: Page) => {
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
        border: rectangleBorder,
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

const onHeightChange = (page: Page, height: string) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const slideCurEl =
      slideCur.slideObjects.find(
        (slideOb) => slideOb.id === page.selection.elementID,
      ) || null

    if (slideCurEl != null) {
      const newSize = {
        width: slideCurEl.size.width,
        height: Number(height),
      }
      slideCurEl.size = newSize
      slideCurEl.data.size = newSize

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
}

const onWidthChange = (page: Page, width: string) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const slideCurEl =
      slideCur.slideObjects.find(
        (slideOb) => slideOb.id === page.selection.elementID,
      ) || null

    if (slideCurEl) {
      const newSize = {
        width: Number(width),
        height: slideCurEl.size.height, // сохраняем текущую высоту
      }
      slideCurEl.size = newSize
      slideCurEl.data.size = newSize

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
      elemCur.data.color.hex = newColor

      const updatedObjects = slideCur.slideObjects.map((elem) =>
        elem.id === elemCur.id ? elemCur : elem,
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

export {
  selectElement,
  addTextElement,
  addImageElement,
  addCircleElement,
  addRectangleElement,
  addTriangleElement,
  removeElement,
  onHeightChange,
  onWidthChange,
  onColorChange,
  onElemChange,
}
