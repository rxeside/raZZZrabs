import React, { useState } from 'react'
import BackgroundType from '../model/main'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const ColorChangingButton = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const handleButtonClick = () => {
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
  }

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '20px' }}>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  )
}

export default ColorChangingButton
