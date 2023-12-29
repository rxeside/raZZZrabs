import { CSSProperties } from 'react'

type TextAriaProps = {
  placeholder?: string
  className?: string
  value?: string
  style: CSSProperties
}

function TextAria({ placeholder, className, value, style }: TextAriaProps) {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      defaultValue={value}
      style={style}
    ></textarea>
  )
}

export default TextAria
