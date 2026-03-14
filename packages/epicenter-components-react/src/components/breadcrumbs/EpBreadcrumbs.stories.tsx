import { EpBreadcrumbs } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof EpBreadcrumbs> = {
  title: 'Components/Breadcrumbs',
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
