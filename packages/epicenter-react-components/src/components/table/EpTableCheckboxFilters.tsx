import React from 'react'
import EpCheckbox from '../checkbox/EpCheckbox'
import EpFlex from '../flexbox/EpFlex'

export interface CheckboxFilter {
  label: string
  checked: boolean
  value?: any
}

export interface EpTableCheckboxFiltersProps {
  /** Object with category keys and arrays of checkbox filter objects */
  filters: Record<string, CheckboxFilter[]>
  /** Whether to show section labels */
  sectionLabels?: boolean
  /** Callback when checkbox state changes */
  onUpdateFilters: (params: { category: string; label: string; checked: boolean }) => void
  /** Additional CSS classes */
  className?: string
}

/**
 * EpTableCheckboxFilters - Checkbox filter groups for tables
 * 
 * Displays categorized checkbox filters with optional section headers.
 */
const EpTableCheckboxFilters: React.FC<EpTableCheckboxFiltersProps> = ({
  filters,
  sectionLabels = true,
  onUpdateFilters,
  className = ''
}) => {
  const handleCheckboxChange = (category: string, label: string, checked: boolean) => {
    onUpdateFilters({ category, label, checked })
  }

  return (
    <div className={`ep-table-checkbox-filters${className ? ` ${className}` : ''}`}>
      <EpFlex className="flex-col gap-30">
        {Object.entries(filters).map(([category, filterSet]) => (
          <EpFlex key={category} className="ep-table-checkbox-filters__container flex-col">
            {sectionLabels && (
              <h3 className="text-style--section">
                {category.replace(/_/g, ' ')}
              </h3>
            )}
            {filterSet.map((checkbox) => (
              <EpCheckbox
                key={checkbox.label}
                label={checkbox.label}
                checked={checkbox.checked}
                onChange={(checked) =>
                  handleCheckboxChange(category, checkbox.label, checked)
                }
              />
            ))}
          </EpFlex>
        ))}
      </EpFlex>
    </div>
  )
}

export default EpTableCheckboxFilters
