import React, { forwardRef, ReactNode, useId, useState, KeyboardEvent, FocusEvent, ChangeEvent } from 'react'
import EpInputStyler from '../input-styler/EpInputStyler'

export interface EpInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * The ID attribute for the input element. Auto-generated if not provided.
   */
  inputId?: string
  /**
   * Label text for the input (used as placeholder when empty).
   */
  label?: string
  /**
   * The input type attribute.
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  /**
   * Placeholder text shown when the input is empty.
   */
  placeholder?: string
  /**
   * Current value of the input
   */
  value?: string
  /**
   * Change handler for controlled input
   */
  onChange?: (value: string) => void
  /**
   * If true, displays a clear button when input has a value.
   * @default false
   */
  clearable?: boolean
  /**
   * If true, disables the input element.
   * @default false
   */
  disabled?: boolean
  /**
   * If true, automatically focuses the input on mount.
   * @default false
   */
  autofocus?: boolean
  /**
   * If true, marks the input as required.
   * @default false
   */
  required?: boolean
  /**
   * If true, makes the input read-only.
   * @default false
   */
  readonly?: boolean
  /**
   * The size variant of the input.
   * @default 'default'
   */
  size?: 'default' | 'large' | 'xlarge'
  /**
   * If true, enables error state styling and message display.
   * @default false
   */
  errorEnabled?: boolean
  /**
   * If true, displays the input in error state.
   * @default false
   */
  error?: boolean
  /**
   * Error message to display below the input.
   */
  errorMessage?: string
  /**
   * Icon content for left side
   */
  iconLeft?: ReactNode
  /**
   * Icon content for right side (overridden by clearable button if active)
   */
  iconRight?: ReactNode
  /**
   * Handler called when input is focused
   */
  onFocus?: (value: string) => void
  /**
   * Handler called when input loses focus
   */
  onBlur?: (value: string) => void
  /**
   * Handler called when Escape key is pressed
   */
  onEsc?: (value: string) => void
  /**
   * Handler called when Enter key is pressed
   */
  onEnter?: (value: string) => void
  /**
   * Handler called when clear button is clicked
   */
  onClear?: () => void
}

const EpInput = forwardRef<HTMLInputElement, EpInputProps>(({
  inputId,
  label = '',
  type = 'text',
  placeholder,
  value = '',
  onChange,
  clearable = false,
  disabled = false,
  autofocus = false,
  required = false,
  readonly = false,
  size = 'default',
  errorEnabled = false,
  error = false,
  errorMessage = '',
  iconLeft,
  iconRight,
  onFocus,
  onBlur,
  onEsc,
  onEnter,
  onClear,
  ...rest
}, ref) => {
  const generatedId = useId()
  const computedId = inputId || generatedId
  const computedPlaceholder = placeholder || label
  const hasInput = !!value

  const inputClasses = [
    'ep-input',
    size !== 'default' && `ep-input--${size}`,
    disabled && 'ep-input--disabled'
  ].filter(Boolean).join(' ')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event.target.value)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.blur()
      onEsc?.(value)
    } else if (event.key === 'Enter') {
      onEnter?.(value)
    }
  }

  const handleClear = () => {
    onChange?.('')
    onClear?.()
    // Focus the input after clearing
    if (ref && 'current' in ref && ref.current) {
      ref.current.focus()
    }
  }

  return (
    <EpInputStyler
      id={computedId}
      hasInput={hasInput}
      label={label}
      clearable={clearable}
      disabled={disabled}
      errorEnabled={errorEnabled}
      error={error}
      errorMessage={errorMessage}
      size={size}
      iconLeft={iconLeft}
      iconRight={iconRight}
      onClear={handleClear}
    >
      <input
        id={computedId}
        ref={ref}
        className={inputClasses}
        type={type}
        placeholder={computedPlaceholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        autoFocus={autofocus}
        readOnly={readonly}
        required={required}
        {...rest}
      />
    </EpInputStyler>
  )
})

EpInput.displayName = 'EpInput'

export default EpInput
