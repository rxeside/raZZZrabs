import { useContext } from 'react'
import { Slide } from '../model/main'
import { PageContext } from '../context/page'

type UseSlideManagementReturnType = {
  addSlide: (slideID: string) => void
  removeSlide: (slideID: string) => void
  selectSlide: (slideID: string) => void
}

const useSlideManagement = (): UseSlideManagementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const addSlide = (slideID: string) => {
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

    const selectedIndex = page.slides.findIndex(function (slide) {
      if (slide.slideID === slideID) {
        return slide
      }
    })

    console.log(selectedIndex)

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

  const selectSlide = (slideID: string) => {
    setPage({
      ...page,
      selection: {
        ...page.selection,
        slideID: slideID,
      },
    })
  }

  return {
    addSlide,
    removeSlide,
    selectSlide,
  }
}

export default useSlideManagement
