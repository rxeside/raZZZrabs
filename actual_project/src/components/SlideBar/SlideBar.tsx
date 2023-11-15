import Slide from '../Slide/Slide'
import { Slide as TSlide } from '../../model/main'

type SlideBarProps = {
  selectSlides: TSlide[]
  slides: TSlide[]
}

function SlideBar({ selectSlides, slides }: SlideBarProps) {
  return (
    <div className="slide-bar">
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <div key={slide.slideID} className="slide-bar__element">
            <div className="slide-bar__index">{index + 1}</div>
            <div className="slide-bar__wrapper">
              <Slide
                isSelectedSlide={selectSlides.includes(slide)}
                slide={slide}
                className="slide-bar__slide"
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default SlideBar
