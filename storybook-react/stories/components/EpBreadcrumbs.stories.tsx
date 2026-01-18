import type { Meta, StoryObj } from '@storybook/react'
import { EpBreadcrumbs } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBreadcrumbs> = {
  title: 'Components/EpBreadcrumbs',
  component: EpBreadcrumbs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EpBreadcrumbs>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Electronics', to: '/products/electronics' },
      { label: 'Laptops' }
    ]
  }
}

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Settings' }
    ]
  }
}

export const DeepNesting: Story = {
  args: {
    items: [
      { label: 'Root', to: '/' },
      { label: 'Level 1', to: '/level1' },
      { label: 'Level 2', to: '/level1/level2' },
      { label: 'Level 3', to: '/level1/level2/level3' },
      { label: 'Level 4', to: '/level1/level2/level3/level4' },
      { label: 'Current Page' }
    ]
  }
}

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Blog', to: '/blog' },
      { label: 'Post Title' }
    ],
    separator: <span style={{ margin: '0 8px' }}>/</span>
  }
}

export const CustomClasses: Story = {
  args: {
    items: [
      { label: 'Home', to: '/', customClass: 'custom-home' },
      { label: 'Important', to: '/important', customClass: 'custom-important' },
      { label: 'Current Page', customClass: 'custom-current' }
    ]
  }
}

export const CustomRenderer: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Item Details' }
    ],
    renderItem: (crumb, index, isLast) => (
      <>
        {!isLast && crumb.to ? (
          <a
            href={crumb.to}
            style={{
              textDecoration: 'none',
              color: '#007bff',
              fontWeight: 'bold'
            }}
          >
            {crumb.label}
          </a>
        ) : (
          <span style={{ color: isLast ? '#333' : '#666' }}>
            {crumb.label}
          </span>
        )}
        {!isLast && <span style={{ margin: '0 8px', color: '#999' }}>→</span>}
      </>
    )
  }
}

export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Very Long Category Name', to: '/category' },
      { label: 'Another Extremely Long Subcategory', to: '/category/subcategory' },
      { label: 'Current Page with a Very Long Title' }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    )
  ]
}

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Current Page' }
    ]
  }
}
