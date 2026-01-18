import type { Meta, StoryObj } from '@storybook/react'
import { EpCodeView } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpCodeView> = {
  title: 'Components/EpCodeView',
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

const typescriptCode = `interface User {
  id: number;
  name: string;
  email: string;
}

function getUserById(id: number): User | null {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
  
  return users.find(user => user.id === id) || null;
}`

const pythonCode = `def fibonacci(n):
    """Generate Fibonacci sequence up to n"""
    a, b = 0, 1
    result = []
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result

# Example usage
print(fibonacci(100))`

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Site</h1>
  </header>
  <main>
    <p>This is a simple HTML page.</p>
  </main>
</body>
</html>`

const cssCode = `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
}`

const jsonCode = `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "react": "^18.2.0"
  }
}`

export const CodeView: Story = {
  args: {
    code: javascriptCode,
    language: 'javascript',
    theme: 'one-dark-pro'
  }
}
