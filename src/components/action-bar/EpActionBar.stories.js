import { padded } from '@/helpers/decorators'
import EpActionBar from './EpActionBar'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import E from '@/components/logo/E'

const fakeItems = [
  {
    type: 'dropdown',
    alignRight: true,
    button: {
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'help' },
      iconRight: null
    },
    containerProps: {
      backgroundColor: 'var(--background-4)',
      padding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    },
    menuItems: [
      { label: 'Documentation' },
      { label: 'API Reference' },
      { divider: true },
      { label: 'Contact Us' }
    ]
  },
  {
    type: 'button',
    iconLeft: { name: 'notifications' },
    // emit event to parent
    command: () => {
      console.log('notifications clicked')
    }
  },
  {
    type: 'dropdown',
    alignRight: true,
    button: {
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'user' },
      iconRight: null
    },
    containerProps: {
      backgroundColor: 'var(--background-4)',
      padding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    },
    menuItems: [
      { label: 'Profile' },
      { label: 'Switch account' },
      { label: 'Settings' },
      { divider: true },
      { label: 'Sign out' }
    ]
  }
]

export default {
  title: 'Components/Action Bar',
  component: EpActionBar,
  decorators: [padded],
  argTypes: {
    items: {
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter,
    E
  },
  setup() {
    return { args }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <div style="width: 27px;">
            <e
              faceColor="transparent"
              highlightColor="transparent"
              shadowColor="transparent"
              :strokeWidth="6"
              strokeColor="var(--sky-300)"
            />
          </div>
        </template>
        <template #right>
          <ep-action-bar v-bind="args" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div class="copy-block">
          <h1>Action Bar</h1>
          <p>An action bar is a graphical control element that provides a set of commonly used actions within a web application. It is typically displayed as a horizontal row of icon buttons and dropdown menus, allowing users to easily access and perform specific actions within the app.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const ActionBar = Template.bind({})

ActionBar.args = {
  items: fakeItems
}
