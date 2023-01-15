import { centered } from '@/helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
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
      defaultValue: 'Subscribed',
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

const Template = args => ({
  components: {
    EpBadge,
    EpContainer,
    EpFlexContainer
  },
  setup() {
    return { args }
  },
  template: `
  <ep-container width="30rem" height="50rem">
    <ep-flex-container
      flex-flow="column nowrap"
      align-items="center"
      justify-content="center"
      gap="2rem"
    >
      <ep-badge v-bind="args" />
    </ep-flex-container>
  </ep-container>
  `
})

export const Badge = Template.bind({})
