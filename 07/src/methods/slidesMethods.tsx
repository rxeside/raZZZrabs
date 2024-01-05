import { Page, Slide } from '../model/main'
import { v4 as uuidv4 } from 'uuid'

const addSlide = (page: Page) => {
  const newSlide: Slide = {
    slideID: String(uuidv4()),
    slideBackground: {
      color: {
        hex: '#FFFFFF',
        opacity: 1,
      },
    },
    slideObjects: [],
  }

  const selectedIndex = page.slides.findIndex(function (slide) {
    if (slide.slideID === page.selection.slideID) {
      return slide
    }
  })

  let updatedSlides

  if (selectedIndex !== -1) {
    updatedSlides = [
      ...page.slides.slice(0, selectedIndex + 1),
      newSlide,
      ...page.slides.slice(selectedIndex + 1),
    ]
  } else {
    updatedSlides = [newSlide]
  }

  return {
    ...page,
    slides: updatedSlides,
    selection: { ...page.selection, slideID: newSlide.slideID },
  }
}

const removeSlide = (page: Page) => {
  const updatedSlides = page.slides.filter(
    (slide) => slide.slideID !== page.selection.slideID,
  )
  const notEmptySlides = page.slides.length != 1

  let selectedSlideId = null
  const removedSlideIndex = page.slides.findIndex(
    (slide) => slide.slideID === page.selection.slideID,
  )
  if (removedSlideIndex > 0 && notEmptySlides) {
    selectedSlideId = page.slides[removedSlideIndex - 1].slideID
  }
  if (removedSlideIndex == 0 && notEmptySlides) {
    selectedSlideId = page.slides[removedSlideIndex + 1].slideID
  }

  return {
    ...page,
    slides: updatedSlides,
    selection: {
      ...page.selection,
      slideID: selectedSlideId,
    },
  }
}

const onSelectSlide = (page: Page, slideID: string) => {
  return {
    ...page,
    selection: {
      ...page.selection,
      slideID: slideID,
    },
  }
}

export { addSlide, removeSlide, onSelectSlide }
