const commonActionBarArgs = {
  items: [
    {
      type: 'dropdown',
      alignRight: true,
      button: {
        kind: 'ghost',
        label: '',
        iconLeft: { name: 'help' },
        iconRight: null
      },
      containerProps: {
        backgroundColor: 'var(--background-4)',
        containerPadding: '1rem 0',
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
      button: {
        kind: 'ghost',
        label: '',
        iconLeft: { name: 'notifications' },
        iconRight: null
      },
      containerProps: {
        backgroundColor: 'var(--background-4)',
        containerPadding: '1rem 0',
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
      button: {
        kind: 'ghost',
        label: '',
        iconLeft: { name: 'user' },
        iconRight: null
      },
      containerProps: {
        backgroundColor: 'var(--background-4)',
        containerPadding: '1rem 0',
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