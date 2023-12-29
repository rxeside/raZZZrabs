import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { TextBlock, ImageBlock, ShapeBlock } from '../../model/main'
import List from '../common/List/List'
import useElementManagement from '../../hooks/useElementManager'
import useSlideManagement from '../../hooks/useSlideManager'
import ColorPicker from '../ColorPicker/ColorPicker'
import useAddImage from '../../hooks/useAddImage'
import { useState } from 'react'
import useTextElementManager from '../../hooks/useTextElementManager'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function ToolBar({ selectedObject }: ToolBarProps) {
  const addImage = useAddImage()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageData = reader.result as string
        addImage(imageData)
      }

      reader.readAsDataURL(file)
    }
  }

  const { addSlide, removeSlide } = useSlideManagement()

  const {
    addTextElement,
    addImageElement,
    removeElement,
    onHeightChange,
    onWidthChange,
  } = useElementManagement()

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
      <Button icon={'plus'} onClick={addSlide} />
      <Button icon={'trash'} onClick={removeSlide} />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} onClick={addTextElement} />
      <input type="file" onChange={handleImageUpload} />
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
              onChange={addImageElement}
            ></List>
          )
        }}
      />
      <Button icon={'line'} />
      {isNull(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <ColorPicker isElement={false} />
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
          <ColorPicker isElement={true} />
        </>
      )}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'minus'} onClick={onLower} />
          <List
            className={'List'}
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
