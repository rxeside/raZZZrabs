import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { TextBlock, ImageBlock, ShapeBlock } from '../../model/main'
import Input from '../common/Input/Input'
import List from '../common/List/List'

interface ToolBarProps {
  onAddSlide: () => void
  onRemoveSlide: () => void
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
  onAddText: () => void
  onAddImage: () => void
  onAddShape: () => void
}

function ToolBar({
  onAddSlide,
  onRemoveSlide,
  selectedObject,
  onAddText,
  onAddImage,
  onAddShape,
}: ToolBarProps) {
  // const handleAddSlide = () => {
  //   addSlide()
  // }
  function isText(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
    if (selectedObject?.elementType === 'text' && selectedObject != null) {
      return true
    }
    return false
  }

  function isImage(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
    if (selectedObject?.elementType === 'image' && selectedObject != null) {
      return true
    }
    return false
  }

  function isShape(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
    if (selectedObject?.elementType === 'shape' && selectedObject != null) {
      return true
    }
    return false
  }

  function isNull(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
    if (selectedObject == null) {
      return true
    }
    return false
  }

  const handleSelectChange = (value: string) => {
    console.log('Выбрано значение:', value)
  }

  return (
    <div className={classes.toolBar}>
      <Button icon={'plus'} onClick={onAddSlide} />
      <Button icon={'trash'} onClick={onRemoveSlide} />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} onClick={onAddText} />
      <Button icon={'images'} onClick={onAddImage} />
      <Button
        icon={'primitives'}
        onClick={() => {
          return (
            <List
              className={'List'}
              options={[
                { value: 'url', label: 'url' },
                { value: 'base64', label: 'base64' },
              ]}
              onChange={handleSelectChange}
            ></List>
          )
        }}
      />
      <Button icon={'line'} />
      {isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button text={'Фон'} />
        </>
      )}
      {isText(selectedObject) ||
        (isShape(selectedObject) && (
          <>
            <div className={classes.v1}></div>
            <Button icon={'fillcolor'} />
            <Button icon={'bordercolor'} />
            <Button icon={'borderwidth'} />
            <Button icon={'borderstyle'} />
          </>
        ))}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'minus'} />
          <Input
            defaultValue={'Arial'}
            className={classes.presentationName}
          ></Input>
          <Button icon={'plus'} />
          <div className={classes.v1}></div>
          <Button icon={'bold'} />
          <Button icon={'italic'} />
          <Button icon={'underline'} />
          <Button icon={'textcolor'} />
        </>
      )}
      {isImage(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'bordercolor'} />
          <Button icon={'borderwidth'} />
          <Button icon={'borderstyle'} />
          <div className={classes.v1}></div>
          <Button icon={'crop'} />
        </>
      )}
    </div>
  )
}

export default ToolBar
