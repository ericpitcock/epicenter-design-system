import type { ActionMenuButtonProps, ActionMenuConfig, ActionMenuProps, IconProps, MenuItem } from '../types'

export type { ActionMenuButtonProps, ActionMenuConfig, ActionMenuProps, IconProps }

/** Return type of the useActionsMenu composable */
export interface UseActionsMenuReturn {
  /** Generates resolved action-menu props from a config object */
  generateActionMenuProps: (config?: ActionMenuConfig) => ActionMenuProps
}

/**
 * Composable that produces action-menu props from a configuration object.
 *
 * @example
 * ```ts
 * const { generateActionMenuProps } = useActionsMenu()
 * const menuProps = generateActionMenuProps({ menuItems: [...], size: 'small' })
 * ```
 */
export default function useActionsMenu(): UseActionsMenuReturn {
  const generateActionMenuProps = ({
    context = null,
    menuItems = [],
    size = 'small',
    menuClass = 'ep-menu-default',
    buttonProps = {},
    alignRight = true,
  }: ActionMenuConfig = {}): ActionMenuProps => {
    const defaultButtonProps: ActionMenuButtonProps = {
      label: '',
      ariaLabel: 'Actions',
      iconLeft: {
        name: 'dots-vertical',
        styles: { '--ep-icon-stroke-width': 3 },
      },
      iconRight: null,
      class: ['ep-button-var--ghost'],
      size: 'small',
    }

    const mergedButtonProps: ActionMenuButtonProps = {
      ...defaultButtonProps,
      ...buttonProps,
      iconLeft: buttonProps.iconLeft !== undefined
        ? buttonProps.iconLeft
        : defaultButtonProps.iconLeft,
    }

    const processedMenuItems: MenuItem[] = menuItems.map((item) =>
      typeof item === 'function' ? item(context) : item
    )

    return {
      size,
      menuProps: {
        menuItems: processedMenuItems,
        menuClass,
      },
      alignRight,
      buttonProps: mergedButtonProps,
    }
  }

  return {
    generateActionMenuProps,
  }
}