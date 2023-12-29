import { useState } from 'react'
import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import {
  TextBlock,
  ImageBlock,
  ShapeBlock,
  SlideSelection,
  Page,
} from '../../model/main'
import List from '../common/List/List'
import useElementManagement from '../../hooks/useElementManager'
import useSlideManagement from '../../hooks/useSlideManager'
import ColorPicker from '../ColorPicker/ColorPicker'
import FontSelect from '../FontSelector/FontSelector'
import useAddImage from '../../hooks/useAddImage'
import { LoaderImage } from '../ImageUploader/ImageUploader'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
  selectedObjectId: SlideSelection['elementID']
  presentationData: Page
  updatePresentationData: (data: Page) => void
  selectedSlideId?: string
}

function ToolBar({ selectedObject, presentationData }: ToolBarProps) {
  const addImage = useAddImage(presentationData)

  const { addSlide, removeSlide } = useSlideManagement()

  const [selectedFont, setSelectedFont] = useState('Arial')

  const handleFontChange = (font: string) => {
    setSelectedFont(font)
  }
  const { addTextElement, addImageElement, addShapeElement, removeElement } =
    useElementManagement()

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
      <Button icon={'plus'} onClick={addSlide} />
      <Button icon={'trash'} onClick={removeSlide} />
      <div className={classes.v1}></div>
      <Button icon={'prev-arrow'} />
      <Button icon={'next-arrow'} />
      <Button icon={'zoom'} />
      <div className={classes.v1}></div>
      <Button icon={'cursor'} />
      <Button icon={'text-align'} onClick={addTextElement} />
      <LoaderImage addImage={addImage} />
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
          <Button text={'Фон'} />
        </>
      )}
      {(isText(selectedObject) || isShape(selectedObject)) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'fillcolor'} />
          <Button icon={'bordercolor'} />
          <Button icon={'borderwidth'} />
          <Button icon={'borderstyle'} />
        </>
      )}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'minus'} />
          <FontSelect
            defaultFontName={selectedFont}
            fontValue={selectedFont}
            onChange={handleFontChange}
          />
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
      <div className={classes.v1}></div>
      <Button
        icon={'trash'}
        onClick={removeElement}
        title={'Удалить элемент'}
      />
      <div>
        <ColorPicker />
      </div>
    </div>
  )
}

export default ToolBar
