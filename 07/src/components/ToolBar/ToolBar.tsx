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
  changeTextAlignCenterAction,
  changeTextAlignLeftAction,
  changeShapeStrokeWidth,
  changeTextAlignRightAction,
  goToLastState,
  goToNextState,
} from '../../store/actionCreators'
import * as events from 'events'
import { useEffect, useState } from 'react'
import { AddImage } from '../AddImage/AddImage'

interface ToolBarProps {
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function ToolBar({ selectedObject }: ToolBarProps) {
  function isText(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
    if (selectedObject?.elementType === 'text' && selectedObject != null) {
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

  const [popupProps, setPopupProps] = useState({
    x: 100,
    y: 100,
    isHidden: true,
  })

  const handleClosePopup = () => {
    setPopupProps({ ...popupProps, isHidden: true })
  }

  useEffect(() => {
    const elem = document.getElementById('popup')

    if (elem) {
      const handleOpenPopup = () => {
        setPopupProps({
          x: elem.offsetLeft ? elem.offsetLeft : 100,
          y: elem.offsetTop ? elem.offsetTop + 28 : 100,
          isHidden: !popupProps.isHidden,
        })
      }

      elem.addEventListener('click', handleOpenPopup)

      return () => {
        elem.removeEventListener('click', handleOpenPopup)
      }
    }
  }, [popupProps])

  const [popupPropsColor, setPopupPropsColor] = useState({
    x: 100,
    y: 100,
    isHidden: true,
    isBack: true,
  })

  const handleCloseColorPopup = () => {
    setPopupPropsColor({ ...popupPropsColor, isHidden: true })
  }

  useEffect(() => {
    const elemColor = document.getElementById('popupcolor')

    if (elemColor) {
      const handleOpenPopupColor = () => {
        console.log(elemColor)
        setPopupPropsColor({
          x: elemColor.offsetLeft ? elemColor.offsetLeft : 100,
          y: elemColor.offsetTop ? elemColor.offsetTop + 28 : 100,
          isHidden: !popupPropsColor.isHidden,
          isBack: true,
        })
      }

      elemColor.addEventListener('click', handleOpenPopupColor)

      return () => {
        elemColor.removeEventListener('click', handleOpenPopupColor)
      }
    }
  }, [popupPropsColor])

  return (
    <div className={classes.toolBar}>
      <Button
        icon={'plus'}
        onClick={() => store.dispatch(addSlideAction())}
        title={'Добавить слайд'}
      />
      <Button
        icon={'trash'}
        onClick={() => store.dispatch(removeSlideAction())}
        title={'Удалить слайд'}
      />
      <div className={classes.v1}></div>
      <Button
        icon={'prev-arrow'}
        onClick={() => {
          store.dispatch(goToLastState())
        }}
        title={'Назад'}
      />
      <Button
        icon={'next-arrow'}
        onClick={() => {
          store.dispatch(goToNextState())
        }}
        title={'Вперед'}
      />
      <div className={classes.v1}></div>
      <div>
        <Button icon={'images'} id={'popup'} title={'Изображения'} />
        <AddImage {...popupProps} onClose={handleClosePopup} />
      </div>
      <Button
        icon={'text-align'}
        onClick={() => store.dispatch(addTextElementAction())}
        title={'Текст'}
      />
      <Button
        icon={'circle'}
        onClick={() => store.dispatch(addCircleElementAction())}
        title={'Круг'}
      />
      <Button
        icon={'triangle'}
        onClick={() => store.dispatch(addTriangleElementAction())}
        title={'Треугольник'}
      />
      <Button
        icon={'rectangle'}
        onClick={() => store.dispatch(addRectangleElementAction())}
        title={'Прямоугольник'}
      />
      {isShape(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button icon={'borderwidth'} />
          <input
            type={'number'}
            className={classes.list}
            style={{ width: '7%', fontSize: undefined }}
            value={
              isShape(selectedObject)
                ? (selectedObject as ShapeBlock).data.strokeWidth
                : ''
            }
            onChange={(event) =>
              store.dispatch(changeShapeStrokeWidth(event.target.value))
            }
          ></input>
          <div className={classes.fileInputContainer}>
            <ColorPicker
              isElement={true}
              isStroke={true}
              className={classes.customFileInput}
            />
            <Button icon={'bordercolor'} />
          </div>
          <div className={classes.v1}></div>
          <div className={classes.fileInputContainer} title={'Цвет фигуры'}>
            <ColorPicker
              isElement={true}
              isStroke={false}
              className={classes.customFileInput}
            />
            <Button icon={'fillcolor'} />
          </div>
        </>
      )}
      {isText(selectedObject) && (
        <>
          <div className={classes.v1}></div>
          <Button
            icon={'alignLeft'}
            onClick={() => store.dispatch(changeTextAlignLeftAction())}
            title={'Выравнивание слева'}
          />
          <Button
            icon={'alignCenter'}
            onClick={() => store.dispatch(changeTextAlignCenterAction())}
            title={'Выравнивание по центру'}
          />
          <Button
            icon={'alignRight'}
            onClick={() => store.dispatch(changeTextAlignRightAction())}
            title={'Выравнивание справа'}
          />
          <div className={classes.v1}></div>
          <div className={classes.fileInputContainer}>
            <ColorPicker
              isElement={true}
              isStroke={false}
              className={classes.customFileInput}
            />
            <Button icon={'fillcolor'} />
          </div>
          <div className={classes.v1}></div>
          <Button
            icon={'minus'}
            onClick={() => store.dispatch(subFontSizeTextAction())}
            title={'Уменьшить шрифт'}
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
            title={'Увеличить шрифт'}
          />
          <div className={classes.v1}></div>
          <Button
            icon={'bold'}
            onClick={() => store.dispatch(onBoldTextAction())}
            title={'Жирный'}
          />
          <Button
            icon={'italic'}
            onClick={() => store.dispatch(onItalicTextAction())}
            title={'Курсив'}
          />
          <Button
            icon={'underline'}
            onClick={() => store.dispatch(onUnderlineTextAction())}
            title={'Подчеркнуть'}
          />
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
      <div className={classes.v1}></div>
      <div>
        <button
          id={'popupcolor'}
          className={classes.list}
          style={{ background: 'none' }}
        >
          Фон{' '}
        </button>
        <AddImage {...popupPropsColor} onClose={handleCloseColorPopup} />
      </div>
    </div>
  )
}

export default ToolBar
