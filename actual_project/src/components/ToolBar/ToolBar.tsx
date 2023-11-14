import Button from '../common/Button/Button'
function ToolBar() {
  return (
    <div className="info-bar">
      <Button icon={'plus'} />
      <Button icon={'triangle'} />
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <Button icon={'cursor'} />
      <Button icon={'text-align'} />
      <Button icon={'images'} />
      <Button icon={'primitives'} />
      <Button icon={'line'} />
    </div>
  )
}

export default ToolBar
