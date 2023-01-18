import { padded } from '@/helpers/decorators'
import EpActionBar from './EpActionBar'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'

const fakeItems = [
  {
    type: 'button', // button or dropdown
    iconLeft: { name: 'circle' },
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
    EpHeader
  },
  setup() {
    return { args }
  },
  template: `
    <ep-container :useHeader="true" height="100%">
      <template #header>
      <ep-header>
        <template #left>
          <h1>Action Bar</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="args" />
        </template>
      </ep-header>
      </template>
    </ep-container>
  `
})

export const ActionBar = Template.bind({})
