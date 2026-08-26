import { EpDropdown, EpDropdownTrigger, EpDropdownContent } from '@ericpitcock/epicenter-components-react'
import { EpButton, EpMenu, EpMenuItem } from '@ericpitcock/epicenter-components-react'
import type { EpDropdownProps } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { centeredBg } from '../../../storybook/helpers/decorators'

// alignRight lives on EpDropdownContent; surfacing it here gives it a control.
type DropdownStoryProps = EpDropdownProps & {
  alignRight?: boolean
}

const meta: Meta<DropdownStoryProps> = {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centeredBg],
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Options',
      },
    },
    showOnHover: {
      name: 'Show On Hover',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Options',
      },
    },
    autoFocus: {
      name: 'Auto Focus',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Options',
      },
    },
  },
}

export default meta
type Story = StoryObj<DropdownStoryProps>

const menuItems = ['Drip', 'French Press', 'Latte', 'Espresso']

export const Default: Story = {
  args: {
    disabled: false,
    alignRight: false,
    showOnHover: false,
    autoFocus: true,
  },
  render: ({ alignRight, autoFocus, disabled, showOnHover }) => (
    <EpDropdown
      autoFocus={autoFocus}
      disabled={disabled}
      showOnHover={showOnHover}
      onOpenChange={(open) => console.log('openChange:', open)}
    >
      <EpDropdownTrigger>
        <EpButton className="ep-button-var--primary">Choose your coffee</EpButton>
      </EpDropdownTrigger>
      <EpDropdownContent alignRight={alignRight}>
        {({ close }) => (
          <EpMenu onEscape={close} onTab={close}>
            {menuItems.map((label) => (
              <EpMenuItem key={label} onSelect={close}>
                <EpButton className="ep-button--menu-item">{label}</EpButton>
              </EpMenuItem>
            ))}
          </EpMenu>
        )}
      </EpDropdownContent>
    </EpDropdown>
  )
}

// Centering uses inset + auto margins, not transforms: Safari resolves anchor
// positioning against the anchor's untransformed layout box, so a
// translate-centered trigger gets a panel offset by the translate amount.
const edgePositions = [
  { label: 'Top left', style: { top: '1rem', left: '1rem' } },
  { label: 'Top center', style: { top: '1rem', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' } },
  { label: 'Top right', style: { top: '1rem', right: '1rem' } },
  { label: 'Middle left', style: { top: 0, bottom: 0, marginBlock: 'auto', height: 'fit-content', left: '1rem' } },
  { label: 'Middle right', style: { top: 0, bottom: 0, marginBlock: 'auto', height: 'fit-content', right: '1rem' } },
  { label: 'Bottom left', style: { bottom: '1rem', left: '1rem' } },
  { label: 'Bottom center', style: { bottom: '1rem', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' } },
  { label: 'Bottom right', style: { bottom: '1rem', right: '1rem' } },
] as const

export const ViewportEdges: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <>
      {edgePositions.map(({ label, style }) => (
        <div key={label} style={{ position: 'fixed', ...style }}>
          <EpDropdown autoFocus={false}>
            <EpDropdownTrigger>
              <EpButton>{label}</EpButton>
            </EpDropdownTrigger>
            <EpDropdownContent>
              {({ close }) => (
                <EpMenu onEscape={close} onTab={close}>
                  {['Drip', 'French Press', 'Latte', 'Espresso', 'Cortado', 'Flat White'].map((item) => (
                    <EpMenuItem key={item} onSelect={close}>
                      <EpButton className="ep-button--menu-item">{item}</EpButton>
                    </EpMenuItem>
                  ))}
                </EpMenu>
              )}
            </EpDropdownContent>
          </EpDropdown>
        </div>
      ))}
    </>
  )
}
