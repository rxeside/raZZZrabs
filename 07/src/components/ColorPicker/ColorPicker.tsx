import React from 'react'
import { ElementType } from '../../model/main'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'
import store from '../../store/store'
import {
  changeElementColorAction,
  changeSlideColorAction,
} from '../../store/actionCreators'

interface ColorPickerProps {
  isElement: boolean
  className?: string
}

function ColorPicker({ isElement, className }: ColorPickerProps) {
  const page: DefaultRootState = useSelector((state) => state)

  const slideCur = page.slides.find(
    (slide: { slideID: any }) => slide.slideID === page.selection.slideID,
  )

  if (isElement) {
    const elemCur = slideCur?.slideObjects.find(
      (elem: { id: any }) => elem.id === page.selection.elementID,
    )
    if (
      elemCur &&
      (elemCur.elementType == ElementType.SHAPE ||
        elemCur.elementType == ElementType.TEXT)
    ) {
      const ColorEl = elemCur.data.color.hex
      const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColorEl = e.target.value
        store.dispatch(changeElementColorAction(newColorEl))
      }

      return (
        <input
          type="color"
          className={className}
          value={ColorEl}
          onChange={handleColorChange}
        />
      )
    }
  }
  const Color = slideCur?.slideBackground.color.hex
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    store.dispatch(changeSlideColorAction(newColor))
  }

  return (
    <input
      type="color"
      className={className}
      value={Color}
      onChange={handleColorChange}
    />
  )
}

export default ColorPicker
