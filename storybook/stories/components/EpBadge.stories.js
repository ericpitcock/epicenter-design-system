import { centered } from '../../helpers/decorators'
import { colorNames, colorValues } from '../../helpers/colorHelper'
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
    variant: {
      name: 'Variant',
      options: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger'],
      mapping: {
        'Primary': 'primary',
        'Secondary': 'secondary',
        'Success': 'success',
        'Warning': 'warning',
        'Danger': 'danger'
      },
      control: {
        type: 'radio',
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
  variant: 'Secondary',
  outlined: false,
  backgroundColor: 'None',
  borderColor: 'None',
  textColor: 'None',
  uppercase: false
}
