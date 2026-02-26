import { EpButton, EpMenu, EpMenuItem } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof EpMenu> = {
  title: 'Components/Menu',
  component: EpMenu,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof EpMenu>

// Simple icon components
const Analytics01 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
)

const ArrowRight01 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const ArrowUpRight03 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const GoogleMaps = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Radar01 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Settings04 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

interface MenuItem {
  disabled?: boolean
  href?: string
  iconLeft?: React.ComponentType<any>
  iconLeftStyle?: React.CSSProperties
  iconRight?: React.ComponentType<any>
  iconRightStyle?: React.CSSProperties
  label?: string
  submenu?: MenuItem[]
  to?: string
  type: 'item' | 'divider' | 'section'
}

const menuItems: MenuItem[] = [
  {
    type: 'item',
    label: 'Dashboard',
    iconLeft: Analytics01,
    iconLeftStyle: { '--ep-icon-stroke-width': 1 } as React.CSSProperties
  },
  { type: 'divider' },
  { type: 'section', label: 'Actions' },
  {
    type: 'item',
    label: 'Google Maps',
    iconLeft: GoogleMaps,
    iconRight: ArrowUpRight03,
    iconRightStyle: { '--ep-icon-height': '1.2rem', '--ep-icon-stroke-width': 1.5 } as React.CSSProperties,
    href: 'https://www.google.com/maps'
  },
  {
    type: 'item',
    label: 'Track Event',
    iconLeft: Radar01
  },
  {
    type: 'item',
    label: 'More Options',
    iconLeft: Settings04,
    iconLeftStyle: { '--ep-icon-stroke-width': 1.5 } as React.CSSProperties,
    iconRight: ArrowRight01,
    submenu: [
      {
        type: 'item',
        label: 'Settings'
      },
      {
        type: 'item',
        label: 'Preferences'
      },
      { type: 'divider' },
      {
        type: 'item',
        label: 'Help Center'
      },
      {
        type: 'item',
        label: 'About Us'
      }
    ]
  },
  { type: 'divider' },
  { type: 'section', label: 'Shortcuts' },
  {
    type: 'item',
    label: 'Recent Files'
  },
  {
    type: 'item',
    label: 'Saved Items'
  },
  {
    type: 'item',
    label: 'Notifications',
    disabled: true
  },
  { type: 'divider' },
  { type: 'section', label: 'Navigation' },
  {
    type: 'item',
    label: 'Go Back'
  },
  {
    type: 'item',
    label: 'Next Step'
  },
  {
    type: 'item',
    label: 'Open Web Page'
  },
  {
    type: 'item',
    label: 'Advanced Settings',
    disabled: false,
    iconRight: ArrowRight01,
    submenu: [
      {
        type: 'item',
        label: 'Security'
      },
      {
        type: 'item',
        label: 'Privacy'
      },
      {
        type: 'item',
        label: 'Developer Mode',
        disabled: true
      }
    ]
  }
]

const renderMenuItem = (item: MenuItem, index: number, onSelect: (label: string) => void) => {
  if (item.type === 'divider') {
    return <EpMenuItem key={index} type="divider" />
  }

  if (item.type === 'section') {
    return <EpMenuItem key={index} type="section">{item.label}</EpMenuItem>
  }

  return (
    <EpMenuItem
      key={index}
      type="item"
      isDisabled={item.disabled}
      onSelect={() => onSelect(item.label || '')}
      submenu={item.submenu ? (
        <EpMenu>
          {item.submenu.map((subItem, subIndex) => 
            renderMenuItem(subItem, subIndex, onSelect)
          )}
        </EpMenu>
      ) : undefined}
    >
      <EpButton
        className="ep-button--menu-item"
        href={item.href}
        disabled={item.disabled}
        iconLeft={item.iconLeft ? <item.iconLeft style={item.iconLeftStyle} /> : undefined}
        iconRight={item.iconRight ? <item.iconRight style={item.iconRightStyle} /> : undefined}
      >
        {item.label}
      </EpButton>
    </EpMenuItem>
  )
}

export const Menu: Story = {
  render: () => {
    const onSelect = (label: string) => {
      console.log('clicked:', label)
    }

    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          {menuItems.map((item, index) => 
            renderMenuItem(item, index, onSelect)
          )}
        </EpMenu>
      </div>
    )
  }
}
