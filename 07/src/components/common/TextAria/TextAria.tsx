import React, { CSSProperties } from 'react'
import store from '../../../store/store'
import { changeTextAction } from '../../../store/actionCreators'

type TextAriaProps = {
  placeholder?: string
  className?: string
  value?: string
  style: CSSProperties
}

function TextAria({ placeholder, className, value, style }: TextAriaProps) {
  const handleTextChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value
    store.dispatch(changeTextAction(newValue))
  }
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      defaultValue={value}
      style={style}
      onChange={handleTextChange}
    ></textarea>
  )
}

export default TextAria
