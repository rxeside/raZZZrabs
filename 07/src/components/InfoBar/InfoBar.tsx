import Button from '../common/Button/Button'
import classes from './InfoBar.module.css'
import { useInfoBar } from '../../hooks/useInfoBar'

function InfoBar() {
  const { download, upload } = useInfoBar()

  return (
    <div className={classes.infoBar}>
      <Button text={'Файл'} />
      <Button text={'Правка'} />
      <Button text={'Скачать'} onClick={download} />
      <Button text={'Загрузить'} onClick={upload} />
    </div>
  )
}

export default InfoBar
