import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { TextBlock, ImageBlock, ShapeBlock } from '../../model/main'
import List from '../common/List/List'
import ColorPicker from '../ColorPicker/ColorPicker'
import useTextElementManager from '../../hooks/useTextElementManager'
import store from '../../store/store'
import {
  addCircleElementAction,
  addImageElementAction,
  addRectangleElementAction,
  addSlideAction,
  addTextElementAction,
  addTriangleElementAction,
  changeElementHeightAction,
  changeElementWidthAction,
  removeElementAction,
  removeSlideAction,
} from '../../store/actionCreators'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function ToolBar({ selectedObject }: ToolBarProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageData = reader.result as string
        store.dispatch(addImageElementAction(imageData))
      }

      reader.readAsDataURL(file)
    }
  }

  const { onBold, onItalic, onUnderline, onFontfamily, onBigger, onLower } =
    useTextElementManager()

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
      <Button icon={'plus'} onClick={() => store.dispatch(addSlideAction())} />
      <Button
        icon={'trash'}
        onClick={() => store.dispatch(removeSlideAction())}
      />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button
        icon={'text-align'}
        onClick={() => store.dispatch(addTextElementAction())}
      />
      <div className={classes.fileInputContainer}>
        <input
          type="file"
          onChange={handleImageUpload}
          className={classes.customFileInput}
        />
        <Button icon={'images'} />
      </div>
      <Button
        icon={'circle'}
        onClick={() => store.dispatch(addCircleElementAction())}
      />
      <Button
        icon={'triangle'}
        onClick={() => store.dispatch(addTriangleElementAction())}
      />
      <Button
        icon={'rectangle'}
        onClick={() => store.dispatch(addRectangleElementAction())}
      />
      {(isText(selectedObject) || isShape(selectedObject)) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'fillcolor'} />
          <Button icon={'bordercolor'} />
          <Button icon={'borderwidth'} />
          <Button icon={'borderstyle'} />
          <div className={classes.v1}></div>
          <ColorPicker isElement={true} className={classes.colorInput} />
        </>
      )}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'minus'} onClick={onLower} />
          <List
            className={classes.list}
            optionsClassName={classes.list}
            options={[
              { value: 'Arial', label: 'Arial' },
              { value: 'Times New Roman', label: 'Times New Roman' },
              { value: 'Courier New', label: 'Courier New' },
            ]}
            onChange={onFontfamily}
            selectedValue={'Arial'}
          />
          <Button icon={'plus'} onClick={onBigger} />
          <div className={classes.v1}></div>
          <Button icon={'bold'} onClick={onBold} />
          <Button icon={'italic'} onClick={onItalic} />
          <Button icon={'underline'} onClick={onUnderline} />
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
            onClick={() => store.dispatch(removeElementAction())}
            title={'Удалить элемент'}
          />
          <input
            type={'number'}
            className={classes.numberInput}
            value={selectedObject?.size.height}
            onChange={(event) =>
              store.dispatch(changeElementHeightAction(event.target.value))
            }
          ></input>
          <input
            type={'number'}
            className={classes.numberInput}
            value={selectedObject?.size.width}
            onChange={(event) =>
              store.dispatch(changeElementWidthAction(event.target.value))
            }
          ></input>
        </>
      )}
      {isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <ColorPicker isElement={false} className={classes.colorInput} />
        </>
      )}
    </div>
  )
}

export default ToolBar
