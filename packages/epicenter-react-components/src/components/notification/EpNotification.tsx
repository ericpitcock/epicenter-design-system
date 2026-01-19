import React, { useMemo } from 'react'

import { EpButton } from '../button/EpButton'

export interface EpNotificationProps {
  /**
   * Unique identifier for the notification.
   */
  id: string
  /**
   * The notification message text to display.
   */
  message: string
  /**
   * Handler called when the notification is dismissed
   */
  onDismiss?: () => void
  /**
   * ISO 8601 timestamp string for when the notification was created.
   * @default new Date().toISOString()
   */
  timestamp?: string
}

/**
 * Simple time ago formatter
 * Converts ISO timestamp to relative time string (e.g., "2 hours ago")
 */
const useTimeAgo = (timestamp: string): string => {
  return useMemo(() => {
    const now = new Date()
    const then = new Date(timestamp)
    const seconds = Math.floor((now.getTime() - then.getTime()) / 1000)

    if (seconds < 60) return 'just now'
    
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    
    const days = Math.floor(hours / 24)
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`
    
    const months = Math.floor(days / 30)
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`
    
    const years = Math.floor(months / 12)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }, [timestamp])
}

export const EpNotification: React.FC<EpNotificationProps> = ({
  message,
  timestamp = new Date().toISOString(),
  onDismiss
}) => {
  const timeAgo = useTimeAgo(timestamp)

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDismiss?.()
  }

  const closeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
    </svg>
  )

  return (
    <div className="ep-notification">
      <div className="ep-notification__color-strip" />
      <div className="ep-notification__body">
        <div className="ep-notification__message">
          <p className="ep-notification__message__text font-size--small">
            {message}
          </p>
          <p className="ep-notification__message__timestamp">
            {timeAgo}
          </p>
        </div>
        <EpButton
          className="ep-button-var--ghost"
          onClick={handleDismiss}
          iconRight={closeIcon}
        />
      </div>
    </div>
  )
}
