import './SlideBar.css'
import Slide from '../Slide/Slide'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'

type SlideBarProps = {
  selectSlide: TSlideSelection
  slides: TSlide[]
}

function SlideBar({ selectSlide, slides }: SlideBarProps) {
  function isSelectedSlide(selection: TSlideSelection, slide: TSlide) {
    if (slide.slideID == selection.slideID) {
      return true
    }
    return false
  }

  function setClassSelected(bool: boolean) {
    if (bool) {
      return 'slide-bar__wrapper_selected'
    }
    return 'slide-bar__wrapper'
  }

  return (
    <div className="slide-bar">
      {slides.length > 0 &&
        slides.map((slide) => (
          <div key={slide.slideID} className="slide-bar__element">
            <div className="slide-bar__index">{slide.slideID}</div>
            <div
              className={setClassSelected(isSelectedSlide(selectSlide, slide))}
            >
              <Slide slide={slide} className="slide-bar__slide" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default SlideBar
