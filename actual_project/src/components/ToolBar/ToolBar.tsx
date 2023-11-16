import Button from '../common/Button/Button'
import './ToolBar.css'
function ToolBar() {
  return (
    <div className="tool-bar">
      <Button icon={'plus'} />
      <Button icon={'triangle'} />
      <div className="v1"></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className="v1"></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} />
      <Button icon={'images'} />
      <Button icon={'primitives'} />
      <Button icon={'line'} />
    </div>
  )
}

export default ToolBar
