import { centeredSurface } from '../../helpers/decorators.js'
import EpBadge from '@/components/badge/EpBadge.vue'
import { computed } from 'vue'

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
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'color'
      },
      table: {
        category: 'Styles'
      },
    },
    styles: {
      table: { disable: true }
    },
  }
}

export const Badge = args => ({
  components: {
    EpBadge
  },
  setup() {
    const styles = computed(() => ({
      '--ep-badge-bg-color': args.backgroundColor,
      '--ep-badge-border-color': args.borderColor,
      '--ep-badge-text-color': args.textColor,
    }))

    return { args, styles }
  },
  template: `
    <ep-badge
      :label="args.label"
      :style="styles"
    />
  `
})

Badge.args = {
  label: 'Subscribed',
}
