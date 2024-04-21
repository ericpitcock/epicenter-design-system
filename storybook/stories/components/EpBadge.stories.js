import { centeredSurface } from '../../helpers/decorators'
import EpBadge from '@/components/badge/EpBadge'

export default {
  title: 'Components/Badge',
  component: EpBadge,
  decorators: [centeredSurface],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    },
    styles: {
      name: 'Styles',
      control: {
        type: 'object'
      }
    },
  }
}

export const Badge = args => ({
  components: {
    EpBadge
  },
  setup() {
    return { args }
  },
  template: '<ep-badge v-bind="args" />'
})

Badge.args = {
  label: 'Subscribed',
  styles: {
    '--ep-badge-bg-color': 'transparent',
    '--ep-badge-border-color': 'var(--border-color--lighter)',
    '--ep-badge-text-color': 'var(--text-color--loud)',
  },
}
