import Button from '../common/Button/Button'
import classes from './InfoBar.module.css'
import { useInfoBar } from '../../hooks/useInfoBar'

function InfoBar() {
  const { download, upload } = useInfoBar()

  return (
    <div className={classes.infoBar}>
      <Button text={'Скачать JSON'} onClick={download} />
      <Button text={'Загрузить JSON'} onClick={upload} />
    </div>
  )
}

export default InfoBar
