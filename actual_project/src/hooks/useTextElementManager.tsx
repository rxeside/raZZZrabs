import React, { useContext } from 'react'
import { PageContext } from '../context/page'
import { ElementType } from '../model/main'

type useTextElementReturnType = {
  onBold: () => void
  onItalic: () => void
  onUnderline: () => void
  onFontfamily: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onBigger: () => void
  onLower: () => void
}

const useTextElementManager = (): useTextElementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const slideCur =
    page.slides.find((slide) => slide.slideID === page.selection.slideID) ||
    null

  const onBold = () => {
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

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  const onItalic = () => {
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

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  const onUnderline = () => {
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

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  const onFontfamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (slideCur != null) {
      const elemCur = slideCur?.slideObjects.find(
        (elem) => elem.id === page.selection.elementID,
      )

      if (elemCur && elemCur.elementType === ElementType.TEXT) {
        elemCur.data.fontFamily = e.target.value

        const updatedObjects = slideCur.slideObjects.map((elem) =>
          elem.id === elemCur.id ? elemCur : elem,
        )

        const updatedSlides = page.slides.map((slide) =>
          slide.slideID === slideCur.slideID
            ? { ...slide, slideObjects: updatedObjects }
            : slide,
        )

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  const onBigger = () => {
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

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  const onLower = () => {
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

        setPage({
          ...page,
          slides: updatedSlides,
        })
      }
    }
  }

  return {
    onBold,
    onItalic,
    onUnderline,
    onFontfamily,
    onBigger,
    onLower,
  }
}
export default useTextElementManager
