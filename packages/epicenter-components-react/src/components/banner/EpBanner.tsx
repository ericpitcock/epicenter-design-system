import React, { ReactNode } from 'react'

export interface EpBannerProps {
  /**
   * Dismiss button or action
   */
  dismiss?: ReactNode
  /**
   * Icon displayed at the start of the banner
   */
  icon?: ReactNode
  /**
   * Main message content of the banner
   */
  message?: ReactNode
  /**
   * Handler called when the banner is dismissed
   */
  onDismissed?: () => void
  /**
   * Secondary message or additional information
   */
  subtext?: ReactNode
}

export const EpBanner: React.FC<EpBannerProps> = ({
  icon,
  message,
  subtext,
  dismiss,
  onDismissed
}) => {
  const handleDismiss = () => {
    onDismissed?.()
  }

  return (
    <div className="ep-banner">
      <div className="ep-banner__color-strip" />
      <div className="ep-banner__body">
        {icon && (
          <div className="ep-banner__body__icon">
            {icon}
          </div>
        )}
        <div className="ep-banner__body__message">
          <div className="ep-banner__body__message__text font-size--small">
            {message}
          </div>
          {subtext && (
            <div className="ep-banner__body__message__subtext">
              {subtext}
            </div>
          )}
        </div>
        {dismiss && React.cloneElement(dismiss as React.ReactElement, {
          onClick: handleDismiss
        })}
      </div>
    </div>
  )
}
