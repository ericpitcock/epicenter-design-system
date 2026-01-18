import { EpDropdown } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EpDropdown> = {
  title: 'Components/Dropdown',
  component: EpDropdown,
  parameters: {
    layout: 'centered'
  },
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

export const Dropdown: Story = {
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
