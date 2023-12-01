import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import Input from '../common/Input/Input'
import classes from './Header.module.css'

type HeaderProps = {
  presentationName: string
  onAddSlide: () => void
  onRemoveSlide: () => void
}

function Header({ presentationName, onAddSlide, onRemoveSlide }: HeaderProps) {
  return (
    <div className={classes.header}>
      <div className={classes.logoAndName}>
        <img
          className={classes.logo}
          alt={'logo'}
          src={'../../static/img/logo.svg'}
        />
        <Input
          defaultValue={presentationName}
          className={classes.presentationName}
        />
      </div>
      <InfoBar />
      <ToolBar onAddSlide={onAddSlide} onRemoveSlide={onRemoveSlide} />
    </div>
  )
}

export default Header
