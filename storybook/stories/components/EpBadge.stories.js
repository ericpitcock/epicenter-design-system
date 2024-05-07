import { centeredSurface } from '../../helpers/decorators.js'
import EpBadge from '@/components/badge/EpBadge.vue'
// import ref and watch from vue
import { ref, watch } from 'vue'

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
    const styles = ref({
      '--ep-badge-bg-color': args.backgroundColor,
      '--ep-badge-border-color': args.borderColor,
      '--ep-badge-text-color': args.textColor,
    })

    watch(() => args.backgroundColor, (newVal) => {
      styles.value['--ep-badge-bg-color'] = newVal
    })

    watch(() => args.borderColor, (newVal) => {
      styles.value['--ep-badge-border-color'] = newVal
    })

    watch(() => args.textColor, (newVal) => {
      styles.value['--ep-badge-text-color'] = newVal
    })

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
