import React, { useEffect, useRef, useState } from 'react'

export type AsyncButtonStatus = 'default' | 'loading' | 'success' | 'failure'

export interface EpAsyncButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * The current state of the button.
   * @default 'default'
   */
  status?: AsyncButtonStatus
  /**
   * The default button label text.
   * @default 'Submit'
   */
  label?: string
  /**
   * Message displayed when status is 'success'. Falls back to label if not provided.
   */
  successMessage?: string
  /**
   * Message displayed when status is 'failure'. Falls back to label if not provided.
   */
  failureMessage?: string
  /**
   * Controls how the loading state is visually indicated.
   * @default 'text'
   */
  loadingIndicator?: 'text' | 'spinner'
  /**
   * Text displayed during loading state (used for 'text' mode and screen reader text for spinner).
   * @default 'Loading…'
   */
  loadingText?: string
  /**
   * If true, maintains consistent button width across state changes to prevent layout shift.
   * @default true
   */
  preserveWidth?: boolean
  /**
   * If true, disables the button during loading state to prevent multiple clicks.
   * @default true
   */
  disabledDuringLoading?: boolean
  /**
   * Handler called when button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const EpAsyncButton: React.FC<EpAsyncButtonProps> = ({
  status = 'default',
  label = 'Submit',
  successMessage = '',
  failureMessage = '',
  loadingIndicator = 'text',
  loadingText = 'Loading…',
  preserveWidth = true,
  disabledDuringLoading = true,
  onClick,
  className,
  ...rest
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonWidth, setButtonWidth] = useState('')

  const currentText = (() => {
    if (status === 'success' && successMessage) {
      return successMessage
    } else if (status === 'failure' && failureMessage) {
      return failureMessage
    }
    return label
  })()

  const updateWidth = () => {
    if (!preserveWidth) return
    setTimeout(() => {
      if (buttonRef.current) {
        setButtonWidth(`${buttonRef.current.offsetWidth}px`)
      }
    }, 0)
  }

  useEffect(() => {
    updateWidth()
  }, [])

  useEffect(() => {
    updateWidth()
  }, [label, successMessage, failureMessage, preserveWidth])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(disabledDuringLoading && status === 'loading')) {
      onClick?.(event)
    }
  }

  const isDisabled = disabledDuringLoading && status === 'loading'

  return (
    <button
      ref={buttonRef}
      className={['ep-button', className].filter(Boolean).join(' ')}
      disabled={isDisabled}
      style={preserveWidth && buttonWidth ? { width: buttonWidth } : undefined}
      aria-busy={status === 'loading' ? 'true' : 'false'}
      onClick={handleClick}
      {...rest}
    >
      <span
        key={status}
        aria-live={status === 'loading' ? 'polite' : 'off'}
        style={{
          opacity: 1,
          transition: 'opacity 0.3s'
        }}
      >
        {status === 'loading' ? (
          <>
            {loadingIndicator === 'text' ? (
              loadingText
            ) : (
              <>
                <svg
                  className="ep-spinner"
                  viewBox="0 0 50 50"
                  role="img"
                  aria-hidden="true"
                  style={{
                    width: '1em',
                    height: '1em',
                    verticalAlign: '-0.125em',
                    animation: 'ep-spin 1s linear infinite'
                  }}
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0
                  }}
                >
                  {loadingText}
                </span>
              </>
            )}
          </>
        ) : (
          currentText
        )}
      </span>
      <style>{`
        @keyframes ep-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  )
}

export default EpAsyncButton
