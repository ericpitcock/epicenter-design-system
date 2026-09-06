import { EpBanner, EpButton } from '@ericpitcock/epicenter-components-react'
import { Cancel01 } from '@ericpitcock/epicenter-icons-react/Cancel01.jsx'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons'
import { centeredSurface } from '../../../storybook/helpers/decorators'

const meta: Meta<typeof EpBanner> = {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [centeredSurface],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    dismissable: {
      name: 'Dismissable',
      control: { type: 'boolean' }
    },
    message: {
      control: 'text',
      description: 'Main message text'
    },
    subtext: {
      control: 'text',
      description: 'Additional subtext'
    },
    icon: {
      table: { disable: true }
    },
    iconName: {
      name: 'Icon',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
    dismiss: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof EpBanner>

export const Banner: Story = {
  render: (args: any) => {
    const [visible, setVisible] = useState(true)
    const IconComponent = useIconComponent(args.iconName)
    
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
          icon={IconComponent ? <IconComponent /> : undefined}
          dismiss={args.dismissable
            ? <EpButton ariaLabel="Dismiss" iconLeft={<Cancel01 />} />
            : undefined}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  },
  args: {
    dismissable: true,
    message: 'This is an informational banner message',
    subtext: '',
    iconName: 'InformationCircle',
  }
}
