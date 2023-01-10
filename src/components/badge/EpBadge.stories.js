import { centered } from '@/helpers/decorators'
import EpBadge from './EpBadge'

export default {
  title: 'Badge',
  component: EpBadge,
  decorators: [centered],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      defaultValue: 'Badge',
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--background-4)'
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--border-color--lighter)'
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--text-color)'
    },
    uppercase: {
      name: 'Uppercase',
      control: {
        type: 'boolean',
      },
      defaultValue: false
    }
  }
}

const Template = (args) => ({
  components: { EpBadge },
  setup() {
    return { args }
  },
  template: '<ep-badge v-bind="args" />'
})

export const Badge = Template.bind({})
