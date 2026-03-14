import { type Ref, ref } from 'vue'

import type { NotificationItem } from '../../types'

/** Return type of the useNotifications composable */
export interface UseNotificationsReturn {
  /** Add a notification to the list */
  addNotification: (notification: NotificationItem) => void
  /** Clear all notifications with a staggered animation delay */
  clearNotifications: () => void
  /** Reactive list of notifications */
  notifications: Ref<NotificationItem[]>
  /** Remove a notification by id */
  removeNotification: (id: string) => void
}

/**
 * Composable for managing a list of notifications.
 *
 * @param initialNotifications - Notifications to start with (default empty)
 */
export function useNotifications(
  initialNotifications: NotificationItem[] = []
): UseNotificationsReturn {
  const notifications = ref<NotificationItem[]>([...initialNotifications])

  const addNotification = (notification: NotificationItem): void => {
    notifications.value.push(notification)
  }

  const removeNotification = (id: string): void => {
    notifications.value = notifications.value.filter(notification => notification.id !== id)
  }

  const clearNotifications = (): void => {
    notifications.value.forEach((notification, index) => {
      setTimeout(() => {
        removeNotification(notification.id)
      }, index * 100)
    })
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications
  }
}