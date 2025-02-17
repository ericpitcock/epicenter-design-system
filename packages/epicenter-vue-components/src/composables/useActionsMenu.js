export default function useActionsMenu() {
  const generateActionMenuProps = ({
    context = null,
    menuItems = [],
    size = 'small',
    menuClass = 'ep-menu-default',
    buttonProps = {},
    alignRight = true,
  } = {}) => {
    // Default buttonProps with spread merging to allow overrides
    const defaultButtonProps = {
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

    // Merge buttonProps while allowing deep override of iconLeft
    const mergedButtonProps = {
      ...defaultButtonProps,
      ...buttonProps,
      iconLeft: {
        ...defaultButtonProps.iconLeft,
        ...buttonProps.iconLeft, // Override only specific properties of iconLeft
      },
    }

    // Process menuItems dynamically based on context
    const processedMenuItems = menuItems.map((item) =>
      typeof item === 'function' ? item(context) : item
    )

    return {
      size,
      menuItems: processedMenuItems,
      menuClass,
      buttonProps: mergedButtonProps,
      alignRight,
    }
  }

  return {
    generateActionMenuProps,
  }
}