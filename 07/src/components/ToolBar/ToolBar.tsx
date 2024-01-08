import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { ImageBlock, ShapeBlock, TextBlock } from '../../model/main'
import List from '../common/List/List'
import ColorPicker from '../ColorPicker/ColorPicker'
import store from '../../store/store'
import {
  addCircleElementAction,
  addFontSizeAction,
  addImageElementAction,
  addRectangleElementAction,
  addSlideAction,
  addTextElementAction,
  addTriangleElementAction,
  changeFontFamilyAction,
  onBoldTextAction,
  onItalicTextAction,
  onUnderlineTextAction,
  removeElementAction,
  removeSlideAction,
  subFontSizeTextAction,
  goToLastState,
  goToNextState,
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
      <Button
        icon={'prev-arrow'}
        onClick={() => {
          console.log('SUKAAAAA')
          store.dispatch(goToLastState())
        }}
      />
      <Button
        icon={'next-arrow'}
        onClick={() => {
          store.dispatch(goToNextState())
        }}
      />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
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
          <div className={classes.fileInputContainer}>
            <ColorPicker isElement={true} className={classes.customFileInput} />
            <Button icon={'fillcolor'} />
          </div>
          <Button icon={'bordercolor'} />
          <Button icon={'borderwidth'} />
          <Button icon={'borderstyle'} />
        </>
      )}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button
            icon={'minus'}
            onClick={() => store.dispatch(subFontSizeTextAction())}
          />
          <List
            className={classes.list}
            optionsClassName={classes.list}
            options={[
              { value: 'Arial', label: 'Arial' },
              { value: 'Times New Roman', label: 'Times New Roman' },
              { value: 'Courier New', label: 'Courier New' },
            ]}
            onChange={(event) => {
              store.dispatch(changeFontFamilyAction(event.target.value))
            }}
            selectedValue={'Arial'}
          />
          <Button
            icon={'plus'}
            onClick={() => store.dispatch(addFontSizeAction())}
          />
          <div className={classes.v1}></div>
          <Button
            icon={'bold'}
            onClick={() => store.dispatch(onBoldTextAction())}
          />
          <Button
            icon={'italic'}
            onClick={() => store.dispatch(onItalicTextAction())}
          />
          <Button
            icon={'underline'}
            onClick={() => store.dispatch(onUnderlineTextAction())}
          />
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
        </>
      )}
      {isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <div className={classes.fileInputContainer}>
            <ColorPicker
              isElement={false}
              className={classes.customFileInput}
            />
            <Button icon={'fillcolor'} />
          </div>
        </>
      )}
    </div>
  )
}

export default ToolBar
