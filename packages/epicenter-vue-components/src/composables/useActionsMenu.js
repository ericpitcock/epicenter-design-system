export default function useActionsMenu() {
  const generateActionMenuProps = ({
    context = null,
    menuItems = [],
    size = 'small',
    menuClass = 'ep-menu-default',
    buttonProps = {
      label: '',
      ariaLabel: 'Actions',
      iconLeft: {
        name: 'dots-vertical',
        styles: { '--ep-icon-stroke-width': 3 },
      },
      iconRight: null,
      class: ['ep-button-var--ghost'],
      size: 'small',
    },
    alignRight = true,
  } = {}) => {
    // Process menuItems dynamically based on context
    const processedMenuItems = menuItems.map((item) => {
      // If menu item is a function, pass the context to it
      if (typeof item === 'function') {
        return item(context)
      }
      return item
    })

    return {
      size,
      menuItems: processedMenuItems,
      menuClass,
      buttonProps,
      alignRight,
    }
  }

  return {
    generateActionMenuProps,
  }
}