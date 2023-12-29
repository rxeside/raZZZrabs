import Button from '../common/Button/Button'
import classes from './ToolBar.module.css'
import { TextBlock, ImageBlock, ShapeBlock } from '../../model/main'
import Input from '../common/Input/Input'
import List from '../common/List/List'
import useElementManagement from '../../hooks/useElementManager'
import useSlideManagement from '../../hooks/useSlideManager'
import useSlideBackground from '../../hooks/useSlideBackground'
import ColorPicker from '../ColorPicker/ColorPicker'
// import FontSelect from '../FontSelector/FontSelector'
import useAddImage from '../../hooks/useAddImage'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
  selectedObjectId: SlideSelection['elementID']
  presentationData: Page
  updatePresentationData: (data: Page) => void
  selectedSlideId?: string
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
    addShapeElement,
    onHeightChange,
    onWidthChange,
  } = useElementManagement()

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
