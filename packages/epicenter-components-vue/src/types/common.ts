/** Light or dark theme mode */
export type Theme = 'light' | 'dark'

/** Standard component sizes */
export type Size = 'small' | 'default' | 'large' | 'xlarge'

/** Button HTML type attribute */
export type ButtonType = 'button' | 'submit'

/** Layout direction for dividers, empty states, etc. */
export type Direction = 'horizontal' | 'vertical'

/** Sort direction for table columns */
export type SortOrder = 'asc' | 'desc'

/** Flex direction for resizable panes */
export type ResizeDirection = 'column' | 'row'

/** Notification object used by useNotifications and EpNotifications */
export interface NotificationItem {
  /** Unique identifier */
  id: string
  /** Notification message text */
  message: string
  /** Optional timestamp string */
  timestamp?: string
  /** Notification severity */
  type?: 'info' | 'success' | 'warning' | 'error'
}
