import {PageContext} from "../../context/page";
import {ElementType, ImageBlock, ImageTypeVariation} from "../main";

const useAddImage = (page: PageState) => {
  const addImage = (newElement: string) => {
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
        id: String(Date.now()),
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

      setPage({
        ...page,
        slides: updatedSlides,
      })
    }
  }

  return addImage
}