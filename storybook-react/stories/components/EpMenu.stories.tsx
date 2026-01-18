import { EpMenu } from '@ericpitcock/epicenter-react-components'
import { EpMenuItem } from '@ericpitcock/epicenter-react-components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof EpMenu> = {
  title: 'Components/Menu',
  component: EpMenu,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof EpMenu>

export const Menu: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem onSelect={() => setLastAction('New clicked')}>
            New
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Open clicked')}>
            Open
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save clicked')}>
            Save
          </EpMenuItem>
          <EpMenuItem type="divider" />
          <EpMenuItem onSelect={() => setLastAction('Exit clicked')}>
            Exit
          </EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}
