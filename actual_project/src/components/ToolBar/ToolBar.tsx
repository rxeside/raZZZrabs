import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { TextBlock, ImageBlock, ShapeBlock } from '../../model/main'
import Input from '../common/Input/Input'
import List from '../common/List/List'
import useElementManagement from '../../hooks/useElementManager'
import useSlideManagement from '../../hooks/useSlideManager'
import ColorPicker from '../ColorPicker/ColorPicker'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function ToolBar({ selectedObject }: ToolBarProps) {
  const { addSlide, removeSlide } = useSlideManagement()

  const {
    addTextElement,
    addImageElement,
    removeElement,
    addShapeElement,
    onHeightChange,
    onWidthChange,
  } = useElementManagement()

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

  return (
    <div className={classes.toolBar}>
      <Button icon={'plus'} onClick={addSlide} />
      <Button icon={'trash'} onClick={removeSlide} />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} onClick={addTextElement} />
      <Button icon={'images'} onClick={() => {}} />
      <Button icon={'primitives'} onClick={addShapeElement} />
      <Button icon={'line'} />
      {isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <ColorPicker />
        </>
      )}
      {(isText(selectedObject) || isShape(selectedObject)) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'fillcolor'} />
          <Button icon={'bordercolor'} />
          <Button icon={'borderwidth'} />
          <Button icon={'borderstyle'} />
          <div className={classes.v1}></div>
          <ColorPicker />
        </>
      )}
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
        </>
      )}
      {!isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button
            icon={'trash'}
            onClick={removeElement}
            title={'Удалить элемент'}
          />
          <input
            type={'number'}
            className={classes.numberInput}
            value={selectedObject?.size.height}
            onChange={(event) => onHeightChange(event.target.value)}
          ></input>
          <input
            type={'number'}
            className={classes.numberInput}
            value={selectedObject?.size.width}
            onChange={(event) => onWidthChange(event.target.value)}
          ></input>
        </>
      )}
    </div>
  )
}

export default ToolBar
