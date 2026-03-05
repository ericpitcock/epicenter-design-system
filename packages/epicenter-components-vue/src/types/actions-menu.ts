import type { MenuItem } from './menu'

/** Icon configuration for action menu buttons */
export interface IconProps {
  /** Icon name identifier */
  name: string
  /** Optional inline styles for the icon */
  styles?: Record<string, string | number>
}

/** Button configuration for action menu trigger buttons */
export interface ActionMenuButtonProps {
  label?: string
  ariaLabel?: string
  iconLeft?: IconProps | null
  iconRight?: IconProps | null
  class?: string[]
  size?: string
}

/** Configuration input for generating action menu props via useActionsMenu */
export interface ActionMenuConfig {
  /** Context object passed to dynamic menu item functions */
  context?: unknown
  /** Static menu items or functions that receive context and return a MenuItem */
  menuItems?: (MenuItem | ((context: unknown) => MenuItem))[]
  /** Button/menu size */
  size?: string
  /** CSS class applied to the menu container */
  menuClass?: string
  /** Partial button props to override defaults */
  buttonProps?: Partial<ActionMenuButtonProps>
  /** Whether the menu opens aligned to the right */
  alignRight?: boolean
}

/** Resolved props object returned by generateActionMenuProps */
export interface ActionMenuProps {
  size: string
  menuProps: {
    menuItems: MenuItem[]
    menuClass: string
  }
  alignRight: boolean
  buttonProps: ActionMenuButtonProps
}
