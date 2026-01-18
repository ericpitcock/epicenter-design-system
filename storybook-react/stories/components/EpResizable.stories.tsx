import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpResizable } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpResizable> = {
  title: 'Components/EpResizable',
  component: EpResizable,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'The direction of the resizable layout'
    },
    initialSize: {
      control: 'text',
      description: 'The initial size of the resizable pane'
    },
    minSize: {
      control: 'number',
      description: 'The minimum size in pixels'
    },
    maxSize: {
      control: 'number',
      description: 'The maximum size in pixels'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpResizable>

export const HorizontalSplit: Story = {
  args: {
    direction: 'row',
    initialSize: '300px',
    minSize: 200,
    maxSize: 600,
    resizableContent: (
      <div style={{ padding: '20px', background: '#f5f5f5', height: '100%' }}>
        <h3>Resizable Sidebar</h3>
        <p>Drag the handle on the right edge to resize this panel.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
    content: (
      <div style={{ padding: '20px', height: '100%' }}>
        <h2>Main Content</h2>
        <p>This is the main content area that remains fixed.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    )
  ]
}

export const VerticalSplit: Story = {
  args: {
    direction: 'column',
    initialSize: '200px',
    minSize: 150,
    maxSize: 400,
    resizableContent: (
      <div style={{ padding: '20px', background: '#f5f5f5', height: '100%' }}>
        <h3>Top Panel</h3>
        <p>Drag the handle on the bottom edge to resize.</p>
      </div>
    ),
    content: (
      <div style={{ padding: '20px', height: '100%', overflowY: 'auto' }}>
        <h2>Bottom Content</h2>
        <p>This content area grows and shrinks as you resize the top panel.</p>
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i}>Paragraph {i + 1}: Lorem ipsum dolor sit amet.</p>
        ))}
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '600px' }}>
        <Story />
      </div>
    )
  ]
}

export const WithPercentageSize: Story = {
  args: {
    direction: 'row',
    initialSize: '30%',
    minSize: 200,
    maxSize: 800,
    resizableContent: (
      <div style={{ padding: '20px', background: '#e3f2fd', height: '100%' }}>
        <h3>30% Width Panel</h3>
        <p>This panel starts at 30% of the container width.</p>
      </div>
    ),
    content: (
      <div style={{ padding: '20px', height: '100%' }}>
        <h2>70% Width Content</h2>
        <p>The remaining space is allocated to this content area.</p>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    )
  ]
}

export const WithResizeCallback: Story = {
  render: () => {
    const [size, setSize] = useState(300)

    return (
      <div style={{ height: '500px' }}>
        <EpResizable
          direction="row"
          initialSize="300px"
          minSize={200}
          maxSize={600}
          onResize={setSize}
          resizableContent={
            <div style={{ padding: '20px', background: '#f5f5f5', height: '100%' }}>
              <h3>Resizable Panel</h3>
              <p>Current width: {Math.round(size)}px</p>
            </div>
          }
          content={
            <div style={{ padding: '20px', height: '100%' }}>
              <h2>Main Content</h2>
              <p>The sidebar width is being tracked: {Math.round(size)}px</p>
            </div>
          }
        />
      </div>
    )
  }
}

export const CodeEditor: Story = {
  args: {
    direction: 'row',
    initialSize: '250px',
    minSize: 200,
    maxSize: 500,
    resizableContent: (
      <div style={{ padding: '20px', background: '#1e1e1e', color: '#d4d4d4', height: '100%', fontFamily: 'monospace' }}>
        <h4 style={{ margin: 0, marginBottom: '10px', color: '#fff' }}>Files</h4>
        <div style={{ fontSize: '14px' }}>
          <div style={{ padding: '5px 0' }}>📁 src</div>
          <div style={{ padding: '5px 0', paddingLeft: '15px' }}>📄 index.ts</div>
          <div style={{ padding: '5px 0', paddingLeft: '15px' }}>📄 App.tsx</div>
          <div style={{ padding: '5px 0' }}>📁 components</div>
          <div style={{ padding: '5px 0', paddingLeft: '15px' }}>📄 Button.tsx</div>
        </div>
      </div>
    ),
    content: (
      <div style={{ padding: '20px', background: '#282c34', color: '#abb2bf', height: '100%', fontFamily: 'monospace', fontSize: '14px' }}>
        <pre style={{ margin: 0 }}>{`import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;`}</pre>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '600px' }}>
        <Story />
      </div>
    )
  ]
}
