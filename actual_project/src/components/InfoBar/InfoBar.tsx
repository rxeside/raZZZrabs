import Button from '../common/Button/Button'
import './InfoBar.css'

function InfoBar() {
  return (
    <div className="info-bar">
      <Button text={'Файл'} />
      <Button text={'Правка'} />
    </div>
  )
}

export default InfoBar
