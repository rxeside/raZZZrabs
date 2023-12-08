import React, { useState } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onChange: (value: string) => void
  className?: string
}

function List({ options, onChange, className }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>('')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <select
      className={className}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default List
