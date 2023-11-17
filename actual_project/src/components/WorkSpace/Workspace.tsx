import './Workspace.css'
import Slide from '../Slide/Slide'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'

type WorkspaceProps = {
  slides: TSlide[]
  selectSlide: TSlideSelection
}

function Workspace({ slides, selectSlide }: WorkspaceProps) {
  return (
    <div className="workspace">
      {slides.length > 0 &&
        slides.map((slide) => {
          if (selectSlide.slideID === slide.slideID) {
            return <Slide slide={slide} className="slide" />
          }
          return null
        })}
    </div>
  )
}

export default Workspace
