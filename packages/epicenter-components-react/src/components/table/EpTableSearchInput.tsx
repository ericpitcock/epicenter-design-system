import React from 'react'

export interface EpTableSearchInputProps {
  /** Additional CSS classes */
  className?: string
  /** Callback when search value changes */
  onChange: (value: string) => void
  /** Placeholder text */
  placeholder?: string
  /** Current search value */
  value: string
}

/**
 * EpTableSearchInput - Simple search input for tables
 * 
 * Controlled input component for filtering table data.
 */
export const EpTableSearchInput: React.FC<EpTableSearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = ''
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  )
}
