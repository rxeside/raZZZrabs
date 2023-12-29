import React, { useContext } from 'react'
import useElementManagement from '../../hooks/useElementManager'
import { PageContext } from '../../context/page'

function FontPicker() {
  const { page } = useContext(PageContext)
  const { onFontChange } = useElementManagement()

  const slideCur = page.slides.find(
    (slide) => slide.slideID === page.selection.slideID,
  )

  const currentFont = slideCur?.textBlock.fontFamily // Предположим, что свойство fontFamily содержит информацию о текущем шрифте

  const handleFontChange = (e) => {
    const newFont = e.target.value
    onFontChange(newFont)
    console.log(newFont)
  }

  return (
    <select value={currentFont} onChange={handleFontChange}>
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Times New Roman">Times New Roman</option>
      {/* Добавьте другие шрифты в соответствии с вашими потребностями */}
    </select>
  )
}

export default FontPicker
