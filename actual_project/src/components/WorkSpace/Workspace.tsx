import './Workspace.css'
import Slide from '../Slide/Slide'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'

type WorkspaceProps = {
  slides: TSlide[]
  selectSlide: TSlideSelection | null
}

function Workspace({ slides, selectSlide }: WorkspaceProps) {
  return (
    <div className="workspace">
      {slides.length > 0 &&
        slides.map((slide) => {
          if (selectSlide != null && selectSlide.slideID === slide.slideID) {
            return (
              <Slide
                slide={slide}
                className="slide"
                elementSelect={selectSlide.elementID}
              />
            )
          }
          return null
        })}
    </div>
  )
}

export default Workspace
