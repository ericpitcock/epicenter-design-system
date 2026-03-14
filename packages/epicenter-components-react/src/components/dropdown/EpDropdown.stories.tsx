import { EpDropdown, EpDropdownTrigger, EpDropdownContent } from '@ericpitcock/epicenter-components-react'
import { EpButton, EpMenu, EpMenuItem } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof EpDropdown> = {
  title: 'Components/Dropdown',
  component: EpDropdown
}

export default meta
type Story = StoryObj<typeof EpDropdown>

export const Default: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpDropdown>
        <EpDropdownTrigger>
          <EpButton>Open Menu</EpButton>
        </EpDropdownTrigger>
        <EpDropdownContent>
          {({ close }) => (
            <EpMenu>
              <EpMenuItem onSelect={close}>
                <EpButton className="ep-button--menu-item">Item 1</EpButton>
              </EpMenuItem>
              <EpMenuItem onSelect={close}>
                <EpButton className="ep-button--menu-item">Item 2</EpButton>
              </EpMenuItem>
              <EpMenuItem type="divider" />
              <EpMenuItem onSelect={close}>
                <EpButton className="ep-button--menu-item">Item 3</EpButton>
              </EpMenuItem>
            </EpMenu>
          )}
        </EpDropdownContent>
      </EpDropdown>
    </div>
  )
}