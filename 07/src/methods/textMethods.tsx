import { ElementType, Page } from '../model/main'

const onBold = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null
  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.outline.bold = !elemCur.data.outline.bold

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
    }
  }
}

const onItalic = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.outline.italic = !elemCur.data.outline.italic

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
    }
  }
}

const onUnderline = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.outline.underline = !elemCur.data.outline.underline

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
    }
  }
}

const onFontfamily = (page: Page, fontName: string) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.fontFamily = fontName

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
    }
  }
}

const onBigger = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.fontSize += 1

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
    }
  }
}

const onLower = (page: Page) => {
  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  if (slideCur != null) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )

    if (elemCur && elemCur.elementType === ElementType.TEXT) {
      elemCur.data.fontSize -= 1

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
    }
  }
}

export { onBold, onItalic, onUnderline, onFontfamily, onBigger, onLower }
