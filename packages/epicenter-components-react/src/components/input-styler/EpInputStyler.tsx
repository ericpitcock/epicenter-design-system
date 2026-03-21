import { Cancel01 } from '@ericpitcock/epicenter-icons-react/Cancel01.jsx'
import React, { ReactNode } from 'react'

export interface EpInputStylerProps {
  /**
   * Input/select element to wrap
   */
  children?: ReactNode
  /**
   * If true, shows clear button when input has value
   */
  clearable?: boolean
  /**
   * If true, applies disabled styling
   */
  disabled?: boolean
  /**
   * If true, applies error styling
   */
  error?: boolean
  /**
   * If true, enables error state and message display
   */
  errorEnabled?: boolean
  /**
   * Error message displayed below the input
   */
  errorMessage?: string
  /**
   * Whether the input has a value
   */
  hasInput?: boolean
  /**
   * Icon content for left side
   */
  iconLeft?: ReactNode
  /**
   * Icon content for right side
   */
  iconRight?: ReactNode
  /**
   * If true, makes right icon clickable
   */
  iconRightClickable?: boolean
  /**
   * If true, shows right icon even when clearable
   */
  iconRightVisible?: boolean
  /**
   * The ID to associate with the input/select element
   */
  id?: string
  /**
   * Label text displayed above the input
   */
  label?: string
  /**
   * Handler for clear button click
   */
  onClear?: () => void
  /**
   * Size variant
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large' | 'xlarge'
}

export const EpInputStyler: React.FC<EpInputStylerProps> = ({
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
                <Cancel01
                  className="ep-input-styler__icon-right--clickable"
                  onClick={onClear}
                />
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
