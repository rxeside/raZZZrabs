import { useContext } from 'react'
import { Slide } from '../model/main'
import { PageContext } from '../context/page'

type UseSlideManagementReturnType = {
  addSlide: () => void
  removeSlide: (slideID: string) => void
}

const useSlideManagement = (): UseSlideManagementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const addSlide = () => {
    const newSlide: Slide = {
      slideID: String(page.slides.length + 1),
      slideBackground: {
        color: {
          hex: '#FFFFFF',
          opacity: 1,
        },
      },
      slideObjects: [],
    }

    const updatedSlides = [...page.slides, newSlide]
    setPage({
      ...page,
      slides: updatedSlides,
    })
  }
  const removeSlide = (slideID: string) => {
    const updatedSlides = page.slides.filter(
      (slide) => slide.slideID !== slideID,
    )
    const notEmptySlides = page.slides.length != 1

    let selectedSlideId = null
    const removedSlideIndex = page.slides.findIndex(
      (slide) => slide.slideID === slideID,
    )
    if (removedSlideIndex > 0 && notEmptySlides) {
      selectedSlideId = page.slides[removedSlideIndex - 1].slideID
    }
    if (removedSlideIndex == 0 && notEmptySlides) {
      selectedSlideId = page.slides[removedSlideIndex + 1].slideID
    }

    setPage({
      ...page,
      slides: updatedSlides,
      selection: {
        ...page.selection,
        slideID: selectedSlideId,
      },
    })
  }

  return {
    addSlide,
    removeSlide,
  }
}

export default useSlideManagement
