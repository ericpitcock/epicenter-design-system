import type { Meta, StoryObj } from '@storybook/react'
import { EpDropdown } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpDropdown> = {
  title: 'Components/EpDropdown',
  component: EpDropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    alignRight: {
      control: 'boolean',
      description: 'Aligns dropdown to the right'
    },
    showOnHover: {
      control: 'boolean',
      description: 'Opens on hover instead of click'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpDropdown>

export const Default: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={<EpButton>Open Menu</EpButton>}
      >
        {({ close }) => (
          <div style={{ padding: '8px' }}>
            <button style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} role="menuitem">
              Item 1
            </button>
            <button style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} role="menuitem">
              Item 2
            </button>
            <button 
              style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} 
              role="menuitem"
              onClick={close}
            >
              Close Menu
            </button>
          </div>
        )}
      </EpDropdown>
    </div>
  )
}

export const AlignRight: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={<EpButton>Options</EpButton>}
        alignRight
      >
        <div style={{ padding: '8px', minWidth: '200px' }}>
          <button style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} role="menuitem">
            Settings
          </button>
          <button style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} role="menuitem">
            Profile
          </button>
          <button style={{ display: 'block', width: '100%', padding: '8px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }} role="menuitem">
            Logout
          </button>
        </div>
      </EpDropdown>
    </div>
  )
}

export const ShowOnHover: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={<EpButton>Hover Me</EpButton>}
        showOnHover
      >
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <p style={{ margin: 0 }}>This dropdown appears on hover!</p>
        </div>
      </EpDropdown>
    </div>
  )
}

export const CustomTrigger: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={(props) => (
          <button
            {...props.attrs}
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            style={{
              padding: '12px 24px',
              background: props.isOpen ? '#0056b3' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {props.isOpen ? 'Close ▲' : 'Open ▼'}
          </button>
        )}
      >
        <div style={{ padding: '16px', minWidth: '250px' }}>
          <h4 style={{ marginTop: 0 }}>Custom Trigger</h4>
          <p>This dropdown has a fully custom trigger element.</p>
        </div>
      </EpDropdown>
    </div>
  )
}

export const WithLinks: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={<EpButton>Navigation</EpButton>}
      >
        <div style={{ padding: '8px' }}>
          <a href="#home" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: 'inherit' }} role="menuitem">
            Home
          </a>
          <a href="#about" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: 'inherit' }} role="menuitem">
            About
          </a>
          <a href="#contact" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: 'inherit' }} role="menuitem">
            Contact
          </a>
        </div>
      </EpDropdown>
    </div>
  )
}

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown
        trigger={<EpButton disabled>Disabled Dropdown</EpButton>}
        disabled
      >
        <div style={{ padding: '16px' }}>
          <p>This content won't show</p>
        </div>
      </EpDropdown>
    </div>
  )
}
