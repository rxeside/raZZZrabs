import React, { useContext } from 'react'
import useElementManagement from '../../hooks/useElementManager'
import { PageContext } from '../../context/page'

function ColorPicker() {
  const { page } = useContext(PageContext)

  const { onColorChange } = useElementManagement()

  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )
  const Color = slideCur?.slideBackground.color.hex
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    onColorChange(newColor)
    console.log(newColor)
  }

  return <input type="color" value={Color} onChange={handleColorChange} />
}

export default ColorPicker
