// storybook for EpActionBar.vue
import EpActionBar from './EpActionBar'

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
    button: {
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'circle' },
      iconRight: null,
      title: 'This is the tooltip'
    },
    menuItems: [
      {
        label: 'Go to internal page',
        iconLeft: { name: 'arrow-right' },
        bind: {
          to: '/'
        }
      },
      {
        divider: true
      },
      {
        label: 'Log click',
        iconLeft: { name: 'circle' },
        command: () => {
          console.log('click')
        }
      },
      {
        label: 'Link to internet',
        iconLeft: { name: 'export' },
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
  argTypes: {
    items: {
      control: {
        type: 'array'
      },
      defaultValue: fakeItems
    }
  }
}

const Template = (args) => ({
  components: { EpActionBar },
  setup() {
    return { args }
  },
  template: '<ep-action-bar v-bind="args" />'
})

export const ActionBar = Template.bind({})