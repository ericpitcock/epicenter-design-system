import { centered } from '../../helpers/decorators'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'

export default {
  title: 'Components/Split Button',
  component: EpSplitButton,
  decorators: [centered],
  argTypes: {
    buttonProps: {
      name: 'Button Props',
      control: {
        type: 'object'
      }
    },
    dropdownProps: {
      name: 'Dropdown Props',
      control: {
        type: 'object'
      }
    },
  }
}

export const SplitButton = args => ({
  components: { EpSplitButton },
  setup() {
    return { args }
  },
  template: `<ep-split-button v-bind="args" />`
})

SplitButton.args = {
  buttonProps: {
    kind: 'primary',
    label: 'Refresh',
    iconLeft: { name: 'refresh' },
    // command: () => refresh()
  },
  dropdownProps: {
    button: {
      kind: 'primary',
      label: ''
    },
    containerProps: {
      backgroundColor: 'var(--background-4)',
      padding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)',
    },
    menuItems: [
      {
        label: 'Clear & Fetch',
        // command: () => clearAndFetch()
      },
      {
        label: 'Destroy & Fetch',
        // command: () => destroyAndFetch()
      }
    ]
  }
}