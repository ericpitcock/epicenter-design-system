import { padded } from '@/helpers/decorators'
import EpActionBar from './EpActionBar'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import E from '@/components/logo/E'

const fakeItems = [
  {
    type: 'button',
    iconLeft: { name: 'help' },
  },
  {
    type: 'button', // button or dropdown
    iconLeft: { name: 'notifications' },
    iconRight: null,
    title: 'This is the tooltip',
    command: () => {
      console.log('action bar clicked')
    }
  },
  {
    type: 'dropdown', // button or dropdown
    alignRight: true,
    button: {
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'user' },
      iconRight: null,
      title: 'This is the tooltip'
    },
    containerProps: {
      backgroundColor: 'var(--background-4)',
      padding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    },
    menuItems: [
      {
        label: 'Profile',
        // iconLeft: { name: 'arrow-right' },
        bind: {
          to: '/'
        }
      },
      {
        divider: true
      },
      {
        label: 'Switch account',
        // iconLeft: { name: 'circle' },
        command: () => {
          console.log('click')
        }
      },
      {
        label: 'Sign out',
        // iconLeft: { name: 'export' },
        bind: {
          href: 'https://www.google.com/maps'
        }
      }
    ],
    command: () => {
      console.log('action bar clicked')
    }
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
      },
      defaultValue: fakeItems
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
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <div style="height: 3.5rem;">
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
          <p>Default content</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const ActionBar = Template.bind({})
