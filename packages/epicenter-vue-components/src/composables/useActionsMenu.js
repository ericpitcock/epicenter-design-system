export default function useActionsMenu() {
  const generateActionMenuProps = ({
    context = null,
    menuItems = [],
    size = 'small',
    menuClass = 'in-dropdown-menu',
    buttonProps = {
      label: '',
      iconLeft: {
        name: 'dots-vertical',
        styles: { '--ep-icon-stroke-width': 3 },
      },
      iconRight: null,
      class: ['ep-button-variant-subtle-ghost'],
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