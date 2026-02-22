import { Calendar01 } from '@ericpitcock/epicenter-icons/react/Calendar01.jsx';
import { Computer } from '@ericpitcock/epicenter-icons/react/Computer.jsx';
import { Copy01 } from '@ericpitcock/epicenter-icons/react/Copy01.jsx';
import { Delete01 } from '@ericpitcock/epicenter-icons/react/Delete01.jsx';
import { Download01 } from '@ericpitcock/epicenter-icons/react/Download01.jsx';
import { File01 } from '@ericpitcock/epicenter-icons/react/File01.jsx';
import { Github } from '@ericpitcock/epicenter-icons/react/Github.jsx';
import { Home01 } from '@ericpitcock/epicenter-icons/react/Home01.jsx';
import { Moon01 } from '@ericpitcock/epicenter-icons/react/Moon01.jsx';
import { Notification01 } from '@ericpitcock/epicenter-icons/react/Notification01.jsx';
import { Search01 } from '@ericpitcock/epicenter-icons/react/Search01.jsx';
import { Settings01 } from '@ericpitcock/epicenter-icons/react/Settings01.jsx';
import { Sun01 } from '@ericpitcock/epicenter-icons/react/Sun01.jsx';
import { Upload01 } from '@ericpitcock/epicenter-icons/react/Upload01.jsx';
import { User } from '@ericpitcock/epicenter-icons/react/User.jsx';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Kmd } from '../../../packages/epicenter-react-components/src/components/command-palette/Kmd';

const meta = {
  title: 'Components/Kmd',
  component: Kmd,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Kmd>;

export default meta;
type Story = StoryObj<typeof meta>;

const KitchenSinkWrapper = () => {
  const [open, setOpen] = useState(true);

  const commands = [
    {
      id: 'home',
      title: 'Go to Home',
      icon: <Home01 />,
      shortcut: ['⌘', 'H'],
      section: 'Navigation',
      onSelect: () => console.log('Navigate to home'),
    },
    {
      id: 'documents',
      title: 'View Documents',
      icon: <File01 />,
      shortcut: ['⌘', 'D'],
      section: 'Navigation',
      onSelect: () => console.log('View documents'),
    },
    {
      id: 'settings',
      title: 'Open Settings',
      icon: <Settings01 />,
      shortcut: ['⌘', ','],
      section: 'Navigation',
      onSelect: () => console.log('Open settings'),
    },
    {
      id: 'theme',
      title: 'Change Theme',
      icon: <Moon01 />,
      section: 'System',
      children: [
        {
          id: 'theme-light',
          title: 'Light',
          icon: <Sun01 />,
          onSelect: () => console.log('Set theme to light'),
        },
        {
          id: 'theme-dark',
          title: 'Dark',
          icon: <Moon01 />,
          onSelect: () => console.log('Set theme to dark'),
        },
        {
          id: 'theme-system',
          title: 'System',
          icon: <Computer />,
          onSelect: () => console.log('Set theme to system'),
        },
      ],
    },
    {
      id: 'notifications',
      title: 'View Notifications',
      icon: <Notification01 />,
      shortcut: ['⌘', 'N'],
      section: 'System',
      onSelect: () => console.log('View notifications'),
    },
    {
      id: 'search',
      title: 'Global Search',
      icon: <Search01 />,
      shortcut: ['⌘', 'K'],
      section: 'System',
      onSelect: () => console.log('Open global search'),
    },
    {
      id: 'github-repo',
      title: 'View Repository',
      icon: <Github />,
      section: 'GitHub',
      onSelect: () => console.log('View GitHub repo'),
    },
    {
      id: 'github-issues',
      title: 'Browse Issues',
      icon: <File01 />,
      section: 'GitHub',
      onSelect: () => console.log('Browse GitHub issues'),
    },
    {
      id: 'github-prs',
      title: 'View Pull Requests',
      icon: <Github />,
      section: 'GitHub',
      onSelect: () => console.log('View pull requests'),
    },
    {
      id: 'team',
      title: 'Team Members',
      icon: <User />,
      shortcut: ['⌘', 'T'],
      section: 'Workspace',
      onSelect: () => console.log('View team members'),
    },
    {
      id: 'calendar',
      title: 'Open Calendar',
      icon: <Calendar01 />,
      section: 'Workspace',
      onSelect: () => console.log('Open calendar'),
    },
    {
      id: 'copy',
      title: 'Copy to Clipboard',
      icon: <Copy01 />,
      shortcut: ['⌘', 'C'],
      section: 'Actions',
      onSelect: () => console.log('Copy to clipboard'),
    },
    {
      id: 'download',
      title: 'Download File',
      icon: <Download01 />,
      section: 'Actions',
      onSelect: () => console.log('Download file'),
    },
    {
      id: 'upload',
      title: 'Upload File',
      icon: <Upload01 />,
      section: 'Actions',
      onSelect: () => console.log('Upload file'),
    },
    {
      id: 'delete',
      title: 'Delete Item',
      icon: <Delete01 />,
      shortcut: ['⌘', '⌫'],
      section: 'Actions',
      onSelect: () => console.log('Delete item'),
    },
  ];

  return (
    <div>
      <div>
        <h1>Kmd Command Palette</h1>
        <p>Press the button to open the command palette</p>
        <button
          onClick={() => setOpen(true)}
        >
          Open Command Palette
        </button>
        <div>
          Or press <kbd>⌘ K</kbd>
        </div>
      </div>

      <Kmd commands={commands} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const KitchenSink: Story = {
  args: {
    commands: [],
    open: false,
    onClose: () => {},
  },
  render: () => <KitchenSinkWrapper />,
};
