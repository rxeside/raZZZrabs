import { useContext, useState } from 'react'
import { Page, Slide } from '../model/main'
import { PageContext } from '../context/page'

type UseSlideManagementReturnType = {
  slides: Slide[]
  addSlide: () => void
  removeSlide: (slideID: string) => void
}

const useSlideManagement = (): UseSlideManagementReturnType => {
  const { page, setPage } = useContext(PageContext)
  const [slides, setSlides] = useState(page.slides)

  const addSlide = () => {
    const newSlide: Slide = {
      slideID: String(slides.length + 1),
      slideBackground: {
        color: {
          hex: '#FFFFFF',
          opacity: 1,
        },
      },
      slideObjects: [],
    }

    const updatedSlides = [...slides, newSlide]
    setSlides(updatedSlides)
  }
  const removeSlide = (slideID: string) => {
    const updatedSlides = slides.filter((slide) => slide.slideID !== slideID)
    setSlides(updatedSlides)

    const removedSlideIndex = page.slides.findIndex(
      (slide) => slide.slideID === slideID,
    )
    if (removedSlideIndex > 0) {
      const previousSlideId = page.slides[removedSlideIndex - 1].slideID
      const updatedSlidesWithNewIds = updatedSlides.map((slide) => {
        if (Number(slide.slideID) > removedSlideIndex) {
          return { ...slide, slideID: String(Number(slide.slideID) - 1) }
        }
        return slide
      })
      page.selection.slideID = previousSlideId
      setSlides(updatedSlidesWithNewIds)
      setPage(page)
    }
  }

  return {
    slides,
    addSlide,
    removeSlide,
  }
}

export default useSlideManagement
