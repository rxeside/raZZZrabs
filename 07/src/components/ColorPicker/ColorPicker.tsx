// import React, { useContext } from 'react'
// import { connect } from 'react-redux'
// import { setSlideBackgroundColor } from '../../actions/slideActions'
// import { Slide as TSlide } from '../../model/main'
//
// function ColorPicker({ slide, onColorChange }) {
//   const Color = slide?.slideBackground.color.hex
//   const handleColorChange = (e) => {
//     const newColor = e.target.value
//     // Проверка, существует ли slide перед обращением к slide.slideID
//     if (slide && slide.slideID) {
//       onColorChange(slide.slideID, newColor)
//       console.log(newColor)
//     } else {
//       console.error('Slide or slideID is undefined')
//     }
//   }
//
//   return <input type="color" value={Color} onChange={handleColorChange} />
// }
//
// const mapStateToProps = (state) => ({
//   slide: state.slide.slides.find(
//     (slide) => slide.slideID === state.page.selection.slideID,
//   ),
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   onColorChange: (slideID, color) =>
//     dispatch(setSlideBackgroundColor(slideID, color)),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)

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
    onColorChange(newColor)
    console.log(newColor)
  }

  return <input type="color" value={Color} onChange={handleColorChange} />
}

export default ColorPicker
