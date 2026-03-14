import { EpCodeView } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof EpCodeView> = {
  title: 'Components/CodeView',
  component: EpCodeView,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'typescript', 'python', 'html', 'css', 'json'],
      description: 'The language of the code'
    },
    theme: {
      control: 'select',
      options: ['one-dark-pro', 'one-light', 'github-dark', 'github-light'],
      description: 'The syntax highlighting theme'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpCodeView>

const javascriptCode = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to the system\`;
}

const user = { name: 'Alice', role: 'admin' };
greet(user.name);`

export const CodeView: Story = {
  args: {
    code: javascriptCode,
    language: 'javascript',
    theme: 'one-dark-pro'
  }
}
