import type { Meta, StoryObj } from '@storybook/react'
import { EpBrowserFrame } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBrowserFrame> = {
  title: 'Components/EpBrowserFrame',
  component: EpBrowserFrame,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the browser frame'
    },
    url: {
      control: 'text',
      description: 'URL to display in address bar'
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL'
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpBrowserFrame>

export const Default: Story = {
  args: {
    url: 'https://example.com',
    imageSrc: 'https://via.placeholder.com/800x600/4a90e2/ffffff?text=Website+Screenshot',
    imageAlt: 'Website screenshot',
    width: '800px'
  }
}

export const CustomURL: Story = {
  args: {
    url: 'https://my-awesome-app.com/dashboard',
    imageSrc: 'https://via.placeholder.com/1000x700/2ecc71/ffffff?text=Dashboard',
    imageAlt: 'Dashboard screenshot',
    width: '1000px'
  }
}

export const MobileView: Story = {
  args: {
    url: 'https://mobile.example.com',
    imageSrc: 'https://via.placeholder.com/375x667/e74c3c/ffffff?text=Mobile+View',
    imageAlt: 'Mobile view screenshot',
    width: '375px'
  }
}

export const TabletView: Story = {
  args: {
    url: 'https://tablet.example.com',
    imageSrc: 'https://via.placeholder.com/768x1024/9b59b6/ffffff?text=Tablet+View',
    imageAlt: 'Tablet view screenshot',
    width: '768px'
  }
}

export const FullWidth: Story = {
  args: {
    url: 'https://fullwidth.example.com',
    imageSrc: 'https://via.placeholder.com/1200x800/34495e/ffffff?text=Full+Width+Layout',
    imageAlt: 'Full width screenshot',
    width: '100%'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <Story />
      </div>
    )
  ]
}

export const LandingPage: Story = {
  args: {
    url: 'https://startup.io',
    imageSrc: 'https://via.placeholder.com/1000x600/3498db/ffffff?text=Landing+Page',
    imageAlt: 'Landing page screenshot',
    width: '1000px'
  }
}

export const BlogPost: Story = {
  args: {
    url: 'https://blog.example.com/amazing-post',
    imageSrc: 'https://via.placeholder.com/900x1200/1abc9c/ffffff?text=Blog+Post',
    imageAlt: 'Blog post screenshot',
    width: '900px'
  }
}

export const ECommerce: Story = {
  args: {
    url: 'https://shop.example.com/products',
    imageSrc: 'https://via.placeholder.com/1100x800/e67e22/ffffff?text=E-Commerce+Store',
    imageAlt: 'E-commerce screenshot',
    width: '1100px'
  }
}
