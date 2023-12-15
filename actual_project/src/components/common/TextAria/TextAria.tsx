type TextAriaProps = {
  placeholder?: string
  className?: string
  value?: string
}

function TextAria({ placeholder, className, value }: TextAriaProps) {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      defaultValue={value}
    ></textarea>
  )
}

export default TextAria
