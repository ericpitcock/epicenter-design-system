import React, { ReactNode } from 'react'

export interface EpInputStylerProps {
  /**
   * The ID to associate with the input/select element
   */
  id?: string
  /**
   * Whether the input has a value
   */
  hasInput?: boolean
  /**
   * Label text displayed above the input
   */
  label?: string
  /**
   * If true, shows clear button when input has value
   */
  clearable?: boolean
  /**
   * If true, applies disabled styling
   */
  disabled?: boolean
  /**
   * If true, enables error state and message display
   */
  errorEnabled?: boolean
  /**
   * If true, applies error styling
   */
  error?: boolean
  /**
   * Error message displayed below the input
   */
  errorMessage?: string
  /**
   * Size variant
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large' | 'xlarge'
  /**
   * Icon content for left side
   */
  iconLeft?: ReactNode
  /**
   * Icon content for right side
   */
  iconRight?: ReactNode
  /**
   * If true, shows right icon even when clearable
   */
  iconRightVisible?: boolean
  /**
   * If true, makes right icon clickable
   */
  iconRightClickable?: boolean
  /**
   * Handler for clear button click
   */
  onClear?: () => void
  /**
   * Input/select element to wrap
   */
  children?: ReactNode
}

const EpInputStyler: React.FC<EpInputStylerProps> = ({
  id,
  hasInput = false,
  label,
  clearable = false,
  disabled = false,
  errorEnabled = false,
  error = false,
  errorMessage = '',
  size = 'default',
  iconLeft,
  iconRight,
  iconRightVisible = false,
  iconRightClickable = false,
  onClear,
  children
}) => {
  const stylerClasses = [
    'ep-input-styler',
    size !== 'default' && `ep-input-styler--${size}`,
    disabled && 'ep-input-styler--disabled',
    error && 'ep-input-styler--error'
  ].filter(Boolean).join(' ')

  const showClearButton = clearable && hasInput && !disabled
  const showIconRight = iconRight && (!clearable || iconRightVisible)

  return (
    <div className="ep-input-styler__container">
      {label && (
        <label className="ep-input-styler__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={stylerClasses}>
        <div className="ep-input-styler__inner">
          {iconLeft && (
            <div className={`ep-input-styler__icon-left ep-input-styler__icon-left--${size}`}>
              {iconLeft}
            </div>
          )}
          {(showIconRight || showClearButton) && (
            <div className={`ep-input-styler__icon-right ep-input-styler__icon-right--${size}`}>
              {showIconRight && !showClearButton && iconRight}
              {showClearButton && (
                <svg
                  className="ep-input-styler__icon-right--clickable"
                  onClick={onClear}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" fill="currentColor"/>
                </svg>
              )}
            </div>
          )}
        </div>
        {children}
      </div>
      {errorEnabled && (
        <p className="ep-input-styler__error-message">
          {errorMessage || '\u00A0'}
        </p>
      )}
    </div>
  )
}

export default EpInputStyler
