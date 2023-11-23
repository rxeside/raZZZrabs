import Button from '../common/Button/Button'
import { PageContext } from '../../context/page'
import './InfoBar.css'
import { useContext } from 'react'
import { useInfoBar } from '../../hooks/useInfoBar'

function InfoBar() {
  const { page, setPage } = useContext(PageContext)
  const { download, upload } = useInfoBar(page, setPage)

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
