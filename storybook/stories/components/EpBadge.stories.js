import { centered } from '@/helpers/decorators'
import EpBadge from '@/components/badge/EpBadge'

export default {
  title: 'Components/Badge',
  component: EpBadge,
  decorators: [centered],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text',
      }
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text',
      }
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'text',
      }
    },
    uppercase: {
      name: 'Uppercase',
      control: {
        type: 'boolean',
      }
    }
  }
}

const Template = args => ({
  components: {
    EpBadge
  },
  setup() {
    return { args }
  },
  template: '<ep-badge v-bind="args" />'
})

export const Badge = Template.bind({})

Badge.args = {
  label: 'Subscribed',
  backgroundColor: 'var(--background-4)',
  borderColor: 'var(--border-color--lighter)',
  textColor: 'var(--text-color)',
  uppercase: false
}
