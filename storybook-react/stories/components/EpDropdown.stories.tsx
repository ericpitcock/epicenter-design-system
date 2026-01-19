import { EpDropdown, EpButton, EpMenu, EpMenuItem } from '@ericpitcock/epicenter-react-components'
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
          <EpMenu onEscape={close} onTab={close}>
            <EpMenuItem onSelect={close}>
              <EpButton className="ep-button--menu-item" tabIndex={-1}>
                Item 1
              </EpButton>
            </EpMenuItem>
            <EpMenuItem onSelect={close}>
              <EpButton className="ep-button--menu-item" tabIndex={-1}>
                Item 2
              </EpButton>
            </EpMenuItem>
            <EpMenuItem type="divider" />
            <EpMenuItem onSelect={close}>
              <EpButton className="ep-button--menu-item" tabIndex={-1}>
                Close Menu
              </EpButton>
            </EpMenuItem>
          </EpMenu>
        )}
      </EpDropdown>
    </div>
  )
}
