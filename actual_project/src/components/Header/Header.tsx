import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import Input from '../common/Input/Input'
import classes from './Header.module.css'
import { ImageBlock, ShapeBlock, TextBlock } from '../../model/main'

type HeaderProps = {
  presentationName: string
  onAddSlide: () => void
  onRemoveSlide: () => void
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
  onAddText: () => void
  onAddImage: () => void
  onAddShape: () => void
}

function Header({
  presentationName,
  onAddSlide,
  onRemoveSlide,
  selectedObject,
  onAddText,
  onAddImage,
  onAddShape,
}: HeaderProps) {
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
      <ToolBar
        onAddSlide={onAddSlide}
        onRemoveSlide={onRemoveSlide}
        selectedObject={selectedObject}
        onAddText={onAddText}
        onAddImage={onAddImage}
        onAddShape={onAddShape}
      />
    </div>
  )
}

export default Header
