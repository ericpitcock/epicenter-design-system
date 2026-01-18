import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpOverlay } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpOverlay> = {
  title: 'Components/EpOverlay',
  component: EpOverlay,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
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

export const Modal: Story = {
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

export const Toast: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    
    return (
      <div>
        <EpButton onClick={() => setVisible(true)}>
          Show Toast
        </EpButton>
        <EpOverlay
          type="toast"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: '20px', background: 'white', borderRadius: '8px', minWidth: '250px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <p style={{ margin: 0 }}>This is a toast notification!</p>
          </div>
        </EpOverlay>
      </div>
    )
  }
}

export const AutoDismiss: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    
    return (
      <div>
        <EpButton onClick={() => setVisible(true)}>
          Show Auto-Dismiss Toast
        </EpButton>
        <EpOverlay
          type="toast"
          visible={visible}
          onClose={() => setVisible(false)}
          autoDismiss
          duration={3000}
        >
          <div style={{ padding: '20px', background: 'white', borderRadius: '8px', minWidth: '250px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <p style={{ margin: 0 }}>This will auto-dismiss in 3 seconds</p>
          </div>
        </EpOverlay>
      </div>
    )
  }
}

export const NoBackdropClose: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    
    return (
      <div>
        <EpButton onClick={() => setVisible(true)}>
          Open Modal (No Backdrop Close)
        </EpButton>
        <EpOverlay
          type="modal"
          visible={visible}
          onClose={() => setVisible(false)}
          backdropClose={false}
        >
          <div style={{ padding: '40px', background: 'white', borderRadius: '8px', minWidth: '300px' }}>
            <h2>Modal</h2>
            <p>Clicking the backdrop won't close this modal. You must use the close button.</p>
            <EpButton onClick={() => setVisible(false)} style={{ marginTop: '20px' }}>
              Close
            </EpButton>
          </div>
        </EpOverlay>
      </div>
    )
  }
}

export const WithForm: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    
    return (
      <div>
        <EpButton onClick={() => setVisible(true)}>
          Open Form Modal
        </EpButton>
        <EpOverlay
          type="modal"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: '40px', background: 'white', borderRadius: '8px', minWidth: '400px' }}>
            <h2>Contact Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '4px' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '4px' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <EpButton type="submit">Submit</EpButton>
                <EpButton onClick={() => setVisible(false)}>Cancel</EpButton>
              </div>
            </form>
          </div>
        </EpOverlay>
      </div>
    )
  }
}
