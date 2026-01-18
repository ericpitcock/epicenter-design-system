import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpBanner } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBanner> = {
  title: 'Components/EpBanner',
  component: EpBanner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EpBanner>

const infoIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
  </svg>
)

const warningIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
  </svg>
)

export const Default: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) {
      return (
        <div>
          <p>Banner dismissed</p>
          <button onClick={() => setVisible(true)}>Show again</button>
        </div>
      )
    }
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          {...args}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  },
  args: {
    icon: infoIcon,
    message: 'This is an informational banner message',
    dismiss: <EpButton>Dismiss</EpButton>
  }
}

export const WithSubtext: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          icon={warningIcon}
          message="Your session will expire soon"
          subtext="Please save your work to avoid losing any changes"
          dismiss={<EpButton>Got it</EpButton>}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const WithoutIcon: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          message="Simple banner without an icon"
          dismiss={<EpButton>Close</EpButton>}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const CustomDismissButton: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    const closeIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
      </svg>
    )
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          icon={infoIcon}
          message="Banner with icon-only dismiss button"
          dismiss={
            <EpButton
              className="ep-button-var--ghost"
              iconRight={closeIcon}
            />
          }
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const LongMessage: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          icon={infoIcon}
          message="This is a banner with a very long message that demonstrates how the component handles text wrapping when the content exceeds the available width."
          subtext="Additional information can also be quite lengthy and will wrap to multiple lines as needed to fit within the banner container."
          dismiss={<EpButton>Dismiss</EpButton>}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  }
}
