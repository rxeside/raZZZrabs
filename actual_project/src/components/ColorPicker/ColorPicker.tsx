import React, { useContext, useState } from 'react'
import useElementManagement from '../../hooks/useElementManager'
import { PageContext } from '../../context/page'

function ColorPicker() {
  const { page, setPage } = useContext(PageContext)

  const { onColorChange } = useElementManagement()

  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )
  const Color = slideCur?.slideBackground.color.hex
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    const hexValue = newColor.slice(0, 7)
    onColorChange(hexValue)
    console.log(newColor)
  }

  return <input type="color" value={Color} onChange={handleColorChange} />
}

export default ColorPicker
