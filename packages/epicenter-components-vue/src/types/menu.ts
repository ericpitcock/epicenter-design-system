/** Represents an item in EpMenu */
export interface MenuItem {
  /** Whether the menu item is disabled */
  disabled?: boolean
  /** Display label for the menu item */
  label?: string
  /** The type of menu item */
  type?: 'item' | 'divider' | 'section'
  /** Optional icon name */
  icon?: string
  /** Optional keyboard shortcut text */
  shortcut?: string
  /** Optional child menu items */
  children?: MenuItem[]
  /** Optional arbitrary metadata */
  meta?: Record<string, unknown>
}
