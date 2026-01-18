import React, { forwardRef, ReactNode, useId, ChangeEvent, FocusEvent } from 'react'
import { EpInputStyler } from '../input-styler/EpInputStyler'

export interface EpSelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface EpSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> {
  /**
   * Label text for the select (used as placeholder when no option is selected).
   */
  label?: string
  /**
   * If true, disables the select element.
   * @default false
   */
  disabled?: boolean
  /**
   * If true, automatically focuses the select on mount.
   * @default false
   */
  autofocus?: boolean
  /**
   * If true, makes the select read-only.
   * @default false
   */
  readonly?: boolean
  /**
   * If true, marks the select as a required field.
   * @default false
   */
  required?: boolean
  /**
   * The ID attribute for the select element.
   */
  selectId?: string
  /**
   * The size variant of the select.
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large' | 'xlarge'
  /**
   * Array of option objects with 'label', 'value', and optional 'disabled' properties.
   */
  options: EpSelectOption[]
  /**
   * Placeholder text shown when no option is selected.
   * @default 'Select an option'
   */
  placeholder?: string
  /**
   * Current value of the select
   */
  value?: string | number
  /**
   * Change handler for controlled select
   */
  onChange?: (value: string | number) => void
  /**
   * If true, enables error state styling and message display.
   * @default false
   */
  errorEnabled?: boolean
  /**
   * If true, displays the select in error state.
   * @default false
   */
  error?: boolean
  /**
   * Error message to display below the select.
   */
  errorMessage?: string
  /**
   * Icon content for left side
   */
  iconLeft?: ReactNode
  /**
   * Handler called when select loses focus
   */
  onBlur?: () => void
  /**
   * Handler called when select is focused
   */
  onFocus?: () => void
}

export const EpSelect = forwardRef<HTMLSelectElement, EpSelectProps>(({
  label = '',
  disabled = false,
  autofocus = false,
  readonly = false,
  required = false,
  selectId,
  size = 'default',
  options,
  placeholder = 'Select an option',
  value = '',
  onChange,
  errorEnabled = false,
  error = false,
  errorMessage = '',
  iconLeft,
  onBlur,
  onFocus,
  ...rest
}, ref) => {
  const generatedId = useId()
  const computedId = selectId || generatedId

  const selectClasses = [
    'ep-select',
    size !== 'default' && `ep-select--${size}`,
    disabled && 'ep-select--disabled',
    error && 'ep-select--error'
  ].filter(Boolean).join(' ')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.target.blur()
    onChange?.(event.target.value)
  }

  const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
    onBlur?.()
  }

  const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
    onFocus?.()
  }

  // Arrow down icon
  const arrowDownIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10l5 5 5-5z" fill="currentColor"/>
    </svg>
  )

  return (
    <EpInputStyler
      id={computedId}
      label={label}
      disabled={disabled}
      size={size}
      errorEnabled={errorEnabled}
      error={error}
      errorMessage={errorMessage}
      iconLeft={iconLeft}
      iconRight={arrowDownIcon}
      iconRightVisible={true}
      iconRightClickable={false}
    >
      <select
        id={computedId}
        ref={ref}
        className={selectClasses}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        autoFocus={autofocus}
        required={required}
        {...rest}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </EpInputStyler>
  )
})

EpSelect.displayName = 'EpSelect'
