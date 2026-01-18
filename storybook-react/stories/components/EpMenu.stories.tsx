import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpMenu } from '@ericpitcock/epicenter-react-components'
import { EpMenuItem } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpMenu> = {
  title: 'Components/EpMenu',
  component: EpMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EpMenu>

export const Default: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem onSelect={() => setLastAction('New clicked')}>
            New
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Open clicked')}>
            Open
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save clicked')}>
            Save
          </EpMenuItem>
          <EpMenuItem type="divider" />
          <EpMenuItem onSelect={() => setLastAction('Exit clicked')}>
            Exit
          </EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const WithSections: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem type="section">File</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('New')}>New</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Open')}>Open</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save')}>Save</EpMenuItem>
          <EpMenuItem type="divider" />
          <EpMenuItem type="section">Edit</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Cut')}>Cut</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Copy')}>Copy</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Paste')}>Paste</EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            Last action: {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const WithSubmenu: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem onSelect={() => setLastAction('New File')}>
            New File
          </EpMenuItem>
          <EpMenuItem
            submenu={
              <EpMenu>
                <EpMenuItem onSelect={() => setLastAction('Open Recent: File 1')}>
                  File 1
                </EpMenuItem>
                <EpMenuItem onSelect={() => setLastAction('Open Recent: File 2')}>
                  File 2
                </EpMenuItem>
                <EpMenuItem onSelect={() => setLastAction('Open Recent: File 3')}>
                  File 3
                </EpMenuItem>
              </EpMenu>
            }
          >
            Open Recent →
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save')}>
            Save
          </EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const NestedSubmenus: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem type="section">File</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('New')}>New</EpMenuItem>
          <EpMenuItem
            submenu={
              <EpMenu>
                <EpMenuItem onSelect={() => setLastAction('From Template: Blank')}>
                  Blank Document
                </EpMenuItem>
                <EpMenuItem
                  submenu={
                    <EpMenu>
                      <EpMenuItem onSelect={() => setLastAction('Template: Report')}>
                        Report
                      </EpMenuItem>
                      <EpMenuItem onSelect={() => setLastAction('Template: Letter')}>
                        Letter
                      </EpMenuItem>
                      <EpMenuItem onSelect={() => setLastAction('Template: Resume')}>
                        Resume
                      </EpMenuItem>
                    </EpMenu>
                  }
                >
                  Templates →
                </EpMenuItem>
                <EpMenuItem onSelect={() => setLastAction('From Cloud')}>
                  From Cloud
                </EpMenuItem>
              </EpMenu>
            }
          >
            New From... →
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save')}>Save</EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const WithDisabledItems: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem onSelect={() => setLastAction('Cut')}>Cut</EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Copy')}>Copy</EpMenuItem>
          <EpMenuItem isDisabled onSelect={() => setLastAction('Paste (disabled)')}>
            Paste
          </EpMenuItem>
          <EpMenuItem type="divider" />
          <EpMenuItem onSelect={() => setLastAction('Delete')}>Delete</EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const WithIcons: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '300px' }}>
        <EpMenu>
          <EpMenuItem onSelect={() => setLastAction('New')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              New
            </span>
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Open')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h5l2 2h5v10H2V2z" />
              </svg>
              Open
            </span>
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Save')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h10l2 2v10H2V2zm3 0v4h6V2m-4 7h2v5H5v-5z" />
              </svg>
              Save
            </span>
          </EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const KeyboardNavigation: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ minWidth: '400px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Use ArrowUp/ArrowDown to navigate, Enter/Space to select.
          <br />
          ArrowRight opens submenus, ArrowLeft closes them.
          <br />
          Home/End jumps to first/last item. Escape closes.
        </p>
        <EpMenu onEscape={() => setLastAction('Escaped!')}>
          <EpMenuItem onSelect={() => setLastAction('Item 1')}>Item 1</EpMenuItem>
          <EpMenuItem
            submenu={
              <EpMenu>
                <EpMenuItem onSelect={() => setLastAction('Submenu A')}>
                  Submenu Item A
                </EpMenuItem>
                <EpMenuItem onSelect={() => setLastAction('Submenu B')}>
                  Submenu Item B
                </EpMenuItem>
              </EpMenu>
            }
          >
            Item 2 (has submenu) →
          </EpMenuItem>
          <EpMenuItem onSelect={() => setLastAction('Item 3')}>Item 3</EpMenuItem>
        </EpMenu>
        {lastAction && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {lastAction}
          </div>
        )}
      </div>
    )
  }
}

export const InDropdown: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [lastAction, setLastAction] = useState('')
    
    return (
      <div style={{ position: 'relative', minWidth: '300px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          Actions ▼
        </button>
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '4px',
              background: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 1000
            }}
          >
            <EpMenu
              onEscape={() => setIsOpen(false)}
              onTab={() => setIsOpen(false)}
            >
              <EpMenuItem
                onSelect={() => {
                  setLastAction('Edit')
                  setIsOpen(false)
                }}
              >
                Edit
              </EpMenuItem>
              <EpMenuItem
                onSelect={() => {
                  setLastAction('Duplicate')
                  setIsOpen(false)
                }}
              >
                Duplicate
              </EpMenuItem>
              <EpMenuItem type="divider" />
              <EpMenuItem
                onSelect={() => {
                  setLastAction('Delete')
                  setIsOpen(false)
                }}
              >
                Delete
              </EpMenuItem>
            </EpMenu>
          </div>
        )}
        {lastAction && (
          <div style={{ marginTop: '100px', fontSize: '14px', color: '#666' }}>
            Last action: {lastAction}
          </div>
        )}
      </div>
    )
  }
}
