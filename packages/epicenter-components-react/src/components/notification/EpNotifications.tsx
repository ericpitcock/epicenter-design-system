import React, { useMemo } from 'react'

import { EpButton } from '../button/EpButton'
import { EpContainer } from '../container/EpContainer'
import { EpEmptyState } from '../empty-state/EpEmptyState'
import { EpFlex } from '../flexbox/EpFlex'
import { EpHeader } from '../header/EpHeader'

import { EpNotification } from './EpNotification'
import type { EpNotificationProps } from './EpNotification'

export interface NotificationItem extends Omit<EpNotificationProps, 'onDismiss'> {
  id: string
  message: string
  timestamp?: string
}

export interface EpNotificationsProps {
  /**
   * Empty state message when there are no notifications
   * @default "You're all caught up!"
   */
  emptyStateMessage?: string
  /**
   * Array of notification items
   * @default []
   */
  notifications?: NotificationItem[]
  /**
   * Title for the notifications panel
   * @default 'Notifications'
   */
  notificationsTitle?: string
  /**
   * Handler called when all notifications are cleared
   */
  onClearNotifications?: () => void
  /**
   * Handler called when a notification is removed
   */
  onRemoveNotification?: (id: string) => void
}

export const EpNotifications: React.FC<EpNotificationsProps> = ({
  emptyStateMessage = "You're all caught up!",
  notificationsTitle = 'Notifications',
  notifications = [],
  onRemoveNotification,
  onClearNotifications
}) => {
  const isNotificationsEmpty = useMemo(() => {
    return notifications.length === 0
  }, [notifications.length])

  return (
    <EpContainer className="ep-container-default ep-container--sticky-header">
      <EpHeader slot="header">
        <h2 slot="left">
          {notificationsTitle}
        </h2>
        {!isNotificationsEmpty && (
          <EpButton
            slot="right"
            onClick={onClearNotifications}
          >
            Clear all
          </EpButton>
        )}
      </EpHeader>
      {isNotificationsEmpty ? (
        <EpEmptyState>
          {emptyStateMessage}
        </EpEmptyState>
      ) : (
        <EpFlex className="flex-col gap-10">
          {notifications.map((notification) => (
            <EpNotification
              key={notification.id}
              {...notification}
              onDismiss={() => onRemoveNotification?.(notification.id)}
            />
          ))}
        </EpFlex>
      )}
    </EpContainer>
  )
}
