import classes from './Workspace.module.css'
import Slide from '../Slide/Slide'
import { Slide as TSlide } from '../../model/main'

type WorkspaceProps = {
  slide: TSlide
}

function Workspace({ slide }: WorkspaceProps) {
  return (
    <div className={classes.workspace}>
      <Slide slide={slide} className={classes.slide} />
    </div>
  )
}

export default Workspace
