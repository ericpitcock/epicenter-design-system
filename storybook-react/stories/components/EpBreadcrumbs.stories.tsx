import type { Meta, StoryObj } from '@storybook/react'
import { EpBreadcrumbs } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBreadcrumbs> = {
  title: 'Components/EpBreadcrumbs',
  component: EpBreadcrumbs,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof EpBreadcrumbs>

export const Breadcrumbs: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Electronics', to: '/products/electronics' },
      { label: 'Laptops' }
    ]
  }
}
