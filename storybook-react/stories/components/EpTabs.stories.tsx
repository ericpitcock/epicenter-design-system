import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpTabs } from '@ericpitcock/epicenter-react-components'
import { EpTabContent } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpTabs> = {
  title: 'Components/EpTabs',
  component: EpTabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'classic'],
      description: 'The visual variant of the tabs'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpTabs>

const tabItems = ['Tab 1', 'Tab 2', 'Tab 3']

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    
    return (
      <div style={{ minWidth: '400px' }}>
        <EpTabs
          items={tabItems}
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <EpTabContent
          items={tabItems}
          activeTabIndex={activeTab}
        >
          <div style={{ padding: '20px' }}>Content for Tab 1</div>
          <div style={{ padding: '20px' }}>Content for Tab 2</div>
          <div style={{ padding: '20px' }}>Content for Tab 3</div>
        </EpTabContent>
      </div>
    )
  }
}

export const ClassicVariant: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    
    return (
      <div style={{ minWidth: '400px' }}>
        <EpTabs
          items={tabItems}
          variant="classic"
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <EpTabContent
          items={tabItems}
          activeTabIndex={activeTab}
        >
          <div style={{ padding: '20px' }}>Classic Tab 1 Content</div>
          <div style={{ padding: '20px' }}>Classic Tab 2 Content</div>
          <div style={{ padding: '20px' }}>Classic Tab 3 Content</div>
        </EpTabContent>
      </div>
    )
  }
}

export const ManyTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    const manyTabs = ['Overview', 'Details', 'Settings', 'Users', 'Reports', 'Analytics']
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpTabs
          items={manyTabs}
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <EpTabContent
          items={manyTabs}
          activeTabIndex={activeTab}
        >
          {manyTabs.map((tab, index) => (
            <div key={index} style={{ padding: '20px' }}>
              Content for {tab}
            </div>
          ))}
        </EpTabContent>
      </div>
    )
  }
}

export const KeyboardNavigation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    
    return (
      <div style={{ minWidth: '400px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Use Arrow keys, Home, End to navigate tabs. Enter or Space to select.
        </p>
        <EpTabs
          items={tabItems}
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <EpTabContent
          items={tabItems}
          activeTabIndex={activeTab}
        >
          <div style={{ padding: '20px' }}>Content 1</div>
          <div style={{ padding: '20px' }}>Content 2</div>
          <div style={{ padding: '20px' }}>Content 3</div>
        </EpTabContent>
      </div>
    )
  }
}

export const ObjectItems: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    const objectTabs = [
      { label: 'Dashboard' },
      { label: 'Profile' },
      { label: 'Messages' }
    ]
    
    return (
      <div style={{ minWidth: '400px' }}>
        <EpTabs
          items={objectTabs}
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <EpTabContent
          items={objectTabs}
          activeTabIndex={activeTab}
        >
          <div style={{ padding: '20px' }}>
            <h3>Dashboard</h3>
            <p>Welcome to your dashboard</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h3>Profile</h3>
            <p>Your profile information</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h3>Messages</h3>
            <p>Your messages</p>
          </div>
        </EpTabContent>
      </div>
    )
  }
}

export const TabsOnly: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    
    return (
      <div style={{ minWidth: '400px' }}>
        <EpTabs
          items={['Tab A', 'Tab B', 'Tab C', 'Tab D']}
          activeTabIndex={activeTab}
          onTabClick={({ index }) => setActiveTab(index)}
        />
        <div style={{ marginTop: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
          Active tab index: {activeTab}
        </div>
      </div>
    )
  }
}
