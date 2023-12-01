import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'

interface ToolBarProps {
  onAddSlide: () => void
  onRemoveSlide: () => void
}

function ToolBar({ onAddSlide, onRemoveSlide }: ToolBarProps) {
  // const handleAddSlide = () => {
  //   addSlide()
  // }
  return (
    <div className={classes.toolBar}>
      <Button icon={'plus'} onClick={onAddSlide} />
      <Button icon={'triangle'} onClick={onRemoveSlide} />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} />
      <Button icon={'images'} />
      <Button icon={'primitives'} />
      <Button icon={'line'} />
    </div>
  )
}

export default ToolBar
