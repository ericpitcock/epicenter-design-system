import { EpOverlay } from '@ericpitcock/epicenter-components-react'
import { EpButton } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof EpOverlay> = {
  title: 'Components/Overlay',
  component: EpOverlay,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['modal', 'toast'],
      description: 'The type of overlay to display'
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Automatically dismisses after duration'
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-dismiss'
    },
    backdropClose: {
      control: 'boolean',
      description: 'Clicking backdrop closes the overlay'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpOverlay>

export const Overlay: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    
    return (
      <div>
        <EpButton onClick={() => setVisible(true)}>
          Open Modal
        </EpButton>
        <EpOverlay
          type="modal"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: '40px', background: 'white', borderRadius: '8px', minWidth: '300px' }}>
            <h2>Modal Title</h2>
            <p>This is modal content. Click the backdrop or the close button to dismiss.</p>
            <EpButton onClick={() => setVisible(false)} style={{ marginTop: '20px' }}>
              Close
            </EpButton>
          </div>
        </EpOverlay>
      </div>
    )
  }
}
