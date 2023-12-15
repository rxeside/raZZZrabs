interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onChange: (value: string) => void
  className?: string
  selectedValue?: string
  optionsClassName?: string
}

function List({
  options,
  onChange,
  className,
  selectedValue,
  optionsClassName,
}: SelectProps) {
  return (
    <select
      className={className}
      value={selectedValue}
      onClick={() => onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className={optionsClassName}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default List
