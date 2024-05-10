const buttonStyles = {
  '--ep-button-bg-color': 'transparent',
  '--ep-button-border-color': 'transparent',
  '--ep-button-text-color': 'var(--text-color)',
  '--ep-button-hover-bg-color': 'transparent',
  '--ep-button-hover-border-color': 'transparent',
  '--ep-button-hover-text-color': 'var(--text-color--loud)',
  '--ep-button-active-bg-color': 'transparent',
  '--ep-button-active-border-color': 'transparent',
  '--ep-button-active-text-color': 'var(--color--primary)',
}

const commonActionBarArgs = {
  items: [
    {
      type: 'dropdown',
      alignRight: true,
      buttonProps: {
        label: '',
        iconLeft: { name: 'help' },
        iconRight: undefined,
        styles: buttonStyles
      },
      containerProps: {
        backgroundColor: 'var(--interface-overlay)',
        borderRadius: 'var(--border-radius)',
        borderColor: 'var(--border-color--lighter)'
      },
      menuItems: [
        { label: 'Documentation' },
        { label: 'API Reference' },
        { divider: true },
        { label: 'Contact Us' }
      ]
    },
    {
      type: 'dropdown',
      alignRight: true,
      buttonProps: {
        label: '',
        iconLeft: { name: 'notifications' },
        iconRight: undefined,
        styles: buttonStyles
      },
      containerProps: {
        backgroundColor: 'var(--interface-overlay)',
        borderRadius: 'var(--border-radius)',
        borderColor: 'var(--border-color--lighter)'
      },
      menuItems: [
        { label: 'Notifications' },
        { label: 'Alerts' },
        { label: 'Messages' },
        { divider: true },
        { label: 'Settings' }
      ]
    },
    {
      type: 'dropdown',
      alignRight: true,
      buttonProps: {
        label: '',
        iconLeft: { name: 'user' },
        iconRight: undefined,
        styles: buttonStyles
      },
      containerProps: {
        backgroundColor: 'var(--interface-overlay)',
        borderRadius: 'var(--border-radius)',
        borderColor: 'var(--border-color--lighter)'
      },
      menuItems: [
        { label: 'Profile' },
        { label: 'Switch account' },
        { label: 'Settings' },
        { divider: true },
        { label: 'Sign out' }
      ]
    }
  ]
}

export default commonActionBarArgs