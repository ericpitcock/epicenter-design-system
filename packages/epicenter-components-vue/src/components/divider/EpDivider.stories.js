import { EpDivider } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { paddedSurface } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

export default {
  title: 'Components/Divider',
  component: EpDivider,
  decorators: [withCssProps('divider', { except: ['--ep-divider-border-color', '--ep-divider-border-style'] }), paddedSurface],
  argTypes: {
    direction: {
      name: 'Direction',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
        labels: {
          horizontal: 'Horizontal',
          vertical: 'Vertical'
        },
      }
    },
    borderStyle: {
      name: '--ep-divider-border-style',
      options: ['Solid', 'Dashed', 'Dotted'],
      mapping: {
        Solid: 'solid',
        Dashed: 'dashed',
        Dotted: 'dotted'
      },
      control: {
        type: 'radio'
      }
    },
    borderColor: {
      name: '--ep-divider-border-color',
      control: {
        type: 'color'
      }
    },
    styles: {
      table: { disable: true }
    },
  
    ...cssPropArgTypes('divider', { except: ['--ep-divider-border-color', '--ep-divider-border-style'] }),
  }
}

export const Divider = args => ({
  components: { EpDivider },
  setup() {
    const styles = computed(() => {
      return {
        '--ep-divider-border-style': args.borderStyle,
        '--ep-divider-border-color': args.borderColor
      }
    })

    return { args, styles }
  },
  template: '<ep-divider v-bind="args" :style="styles" />'
})

Divider.args = {
  direction: 'horizontal',
  borderStyle: 'Solid',
  borderColor: 'var(--border-color)'
}