import './Workspace.css'
import Slide from '../Slide/Slide'
import { Slide as TSlide } from '../../model/main'

type WorkspaceProps = {
  slide: TSlide
  selectSlide: string[] | null
}

function Workspace({ slide, selectSlide }: WorkspaceProps) {
  return (
    <div className="workspace">
      <Slide slide={slide} className="slide" elementSelect={selectSlide} />
    </div>
  )
}

export default Workspace
