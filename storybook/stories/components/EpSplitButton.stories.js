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
    label: 'Download 1.2 (Latest)'
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
        label: 'Download 1.1'
      },
      {
        label: 'Download 1.0.1'
      },
      {
        label: 'Download 1.0'
      },
      {
        label: 'Download 0.9'
      }
    ]
  }
}