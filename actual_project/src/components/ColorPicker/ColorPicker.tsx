import React, { useState } from 'react'

interface ColorPickerProps {
  onColorChange: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [color, setColor] = useState('#000000')

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    onColorChange(newColor)
  }

  return <input type="color" value={color} onChange={handleColorChange} />
}

export default ColorPicker
