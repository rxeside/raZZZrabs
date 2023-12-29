import React, { useContext } from 'react'
import useElementManagement from '../../hooks/useElementManager'
import { PageContext } from '../../context/page'
import { ElementType } from '../../model/main'

interface ColorPickerProps {
  isElement: boolean
}

function ColorPicker({ isElement }: ColorPickerProps) {
  const { page } = useContext(PageContext)

  const { onColorChange, onElemChange } = useElementManagement()

  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )

  if (isElement) {
    const elemCur = slideCur?.slideObjects.find(
      (elem) => elem.id === page.selection.elementID,
    )
    if (
      elemCur &&
      (elemCur.elementType == ElementType.SHAPE ||
        elemCur.elementType == ElementType.TEXT)
    ) {
      const ColorEl = elemCur.data.color.hex
      const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColorEl = e.target.value
        onElemChange(newColorEl)
        console.log(newColorEl)
      }

      return <input type="color" value={ColorEl} onChange={handleColorChange} />
    }
  }
  const Color = slideCur?.slideBackground.color.hex
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    onColorChange(newColor)
    console.log(newColor)
  }

  return <input type="color" value={Color} onChange={handleColorChange} />
}

export default ColorPicker
