import classes from './Workspace.module.css'
import Slide from '../Slide/Slide'
import { Slide as TSlide } from '../../model/main'

type WorkspaceProps = {
  slide: TSlide
  selectSlide: string | null
}

function Workspace({ slide, selectSlide }: WorkspaceProps) {
  return (
    <div className={classes.workspace}>
      <Slide
        slide={slide}
        className={classes.slide}
        elementSelect={selectSlide}
      />
    </div>
  )
}

export default Workspace
