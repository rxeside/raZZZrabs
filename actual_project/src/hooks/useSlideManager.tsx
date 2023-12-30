import { useContext } from 'react'
import { Slide } from '../model/main'
import { PageContext } from '../context/page'

type UseSlideManagementReturnType = {
  addSlide: () => void
  removeSlide: () => void
  onSelectSlide: (slideID: string) => void
}
const useSlideManagement = (): UseSlideManagementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const addSlide = () => {
    const newSlide: Slide = {
      slideID: String(Date.now()),
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
  const removeSlide = () => {
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

    setPage({
      ...page,
      slides: updatedSlides,
      selection: {
        ...page.selection,
        slideID: selectedSlideId,
      },
    })
  }

  const onSelectSlide = (slideID: string) => {
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
    onSelectSlide,
  }
}

export default useSlideManagement
