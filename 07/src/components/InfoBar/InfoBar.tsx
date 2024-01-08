import Button from '../common/Button/Button'
import classes from './InfoBar.module.css'
import { useInfoBar } from '../../hooks/useInfoBar'
import { exportPDF } from '../../methods/exportPDF'

function InfoBar() {
  const { download, upload } = useInfoBar()

  return (
    <div className={classes.infoBar}>
      <Button text={'Скачать JSON'} onClick={download} />
      <Button text={'Загрузить JSON'} onClick={upload} />
      <Button
        text={'PDF'}
        onClick={() => {
          exportPDF()
        }}
      />
    </div>
  )
}

export default InfoBar
