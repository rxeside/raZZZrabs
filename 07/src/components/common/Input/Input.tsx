type InputProps = {
  defaultValue?: string | number
  placeholder?: string
  className?: string
}

function Input({ defaultValue, placeholder, className }: InputProps) {
  return (
    <input
      className={className}

      defaultValue={defaultValue}

      value={defaultValue}
      placeholder={placeholder}
    />
  )
}

export default Input
