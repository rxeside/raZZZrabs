import classes from './Workspace.module.css'
import Slide from '../Slide/Slide'
import { Slide as TSlide } from '../../model/main'

type WorkspaceProps = {
  slide: TSlide
  selectSlide: string | null
  onSelectElement: (elementID: string) => void
}

function Workspace({ slide, selectSlide, onSelectElement }: WorkspaceProps) {
  return (
    <div className={classes.workspace}>
      <Slide
        slide={slide}
        className={classes.slide}
        elementSelect={selectSlide}
        onSelectElement={onSelectElement}
      />
    </div>
  )
}

export default Workspace
