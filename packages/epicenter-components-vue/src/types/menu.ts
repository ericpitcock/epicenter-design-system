/** Represents an item in EpMenu */
export interface MenuItem {
  /** Optional child menu items */
  children?: MenuItem[]
  /** Whether the menu item is disabled */
  disabled?: boolean
  /** Optional icon name */
  icon?: string
  /** Display label for the menu item */
  label?: string
  /** Optional arbitrary metadata */
  meta?: Record<string, unknown>
  /** Optional keyboard shortcut text */
  shortcut?: string
  /** The type of menu item */
  type?: 'item' | 'divider' | 'section'
}
