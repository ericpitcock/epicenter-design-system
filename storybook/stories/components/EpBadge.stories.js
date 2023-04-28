import { centeredSurface } from '../../helpers/decorators'
import { colorNames, colorValues } from '../../helpers/colorHelper'
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
    variant: {
      name: 'Variant',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: {
        type: 'radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          success: 'Success',
          warning: 'Warning',
          danger: 'Danger',
        }
      }
    },
    outlined: {
      name: 'Outlined',
      control: {
        type: 'boolean',
      }
    },
    backgroundColor: {
      name: 'Background Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    borderColor: {
      name: 'Border Color',
      options: colorNames,
      mapping: colorValues,
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
      }
    },
    textColor: {
      name: 'Text Color',
      options: ['None', 'var(--text-color)', 'var(--text-color--inverse)'],
      mapping: {
        'None': '',
        'var(--text-color)': 'var(--text-color)',
        'var(--text-color--inverse)': 'var(--text-color--inverse)'
      },
      control: {
        type: 'select',
      },
      table: {
        category: 'Overrides'
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
  variant: 'success',
  outlined: false,
  backgroundColor: 'None',
  borderColor: 'None',
  textColor: 'None',
  uppercase: false
}
