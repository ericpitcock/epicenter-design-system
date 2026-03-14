import { EpTabs } from '@ericpitcock/epicenter-components-react'
import { EpTabContent } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta: Meta<typeof EpTabs> = {
  title: 'Components/Tabs',
  component: EpTabs,
  parameters: {
    layout: 'centered'
  },
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

export const Tabs: Story = {
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
