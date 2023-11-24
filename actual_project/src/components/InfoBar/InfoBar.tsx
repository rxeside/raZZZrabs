import Button from '../common/Button/Button'
import './InfoBar.css'
import { useInfoBar } from '../../hooks/useInfoBar'

function InfoBar() {
  const { download, upload } = useInfoBar()

  return (
    <div className="info-bar">
      <Button text={'Файл'} />
      <Button text={'Правка'} />
      <Button text={'Скачать'} onClick={download} />
      <Button text={'Загрузить'} onClick={upload} />
    </div>
  )
}

export default InfoBar
