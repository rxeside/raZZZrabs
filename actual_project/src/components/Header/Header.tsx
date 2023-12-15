import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import Input from '../common/Input/Input'
import classes from './Header.module.css'
import { ImageBlock, ShapeBlock, TextBlock } from '../../model/main'

type HeaderProps = {
  presentationName: string
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function Header({ presentationName, selectedObject }: HeaderProps) {
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
      <ToolBar selectedObject={selectedObject} />
    </div>
  )
}

export default Header
