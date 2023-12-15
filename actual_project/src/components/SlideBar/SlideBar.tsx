import classes from './SlideBar.module.css'
import Slide from '../Slide/Slide'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'
import useSlideManagement from '../../hooks/useSlideManager'
type SlideBarProps = {
  selectSlide: TSlideSelection | null
  slides: TSlide[]
}

function SlideBar({ selectSlide, slides }: SlideBarProps) {
  const { onSelectSlide } = useSlideManagement()
  function isSelectedSlide(selection: TSlideSelection | null, slide: TSlide) {
    if (selection != null) {
      if (slide.slideID == selection.slideID) {
        return true
      }
    }
    return false
  }

  function setClassSelected(bool: boolean) {
    if (bool) {
      return classes.slideBarWrapperSelected
    }
    return classes.slideBarWrapper
  }

  return (
    <div className={classes.slideBar}>
      {slides.length > 0 &&
        slides.map((slide) => (
          <div key={slide.slideID} className={classes.slideBarElement}>
            <div className={classes.slideBarIndex}>
              {slides.indexOf(slide) + 1}
            </div>
            <div
              className={setClassSelected(isSelectedSlide(selectSlide, slide))}
              onClick={() => onSelectSlide(slide.slideID)}
            >
              <Slide
                slide={slide}
                className={classes.slideBarSlide}
                elementSelect={null}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default SlideBar
