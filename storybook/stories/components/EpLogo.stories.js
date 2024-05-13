import { centeredCyanBlueGradient } from '../../helpers/decorators.js'
import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'
import { computed } from 'vue'

export default {
  title: 'Components/Logo',
  component: EpicenterLogo,
  decorators: [centeredCyanBlueGradient],
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 500,
        step: 1
      }
    },
    styles: {
      table: { disable: true }
    },
    strokeWidth: {
      name: '--logo-stroke-width',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      }
    },
    strokeColor: {
      name: '--logo-stroke-color',
      control: {
        type: 'color'
      }
    },
    faceColor: {
      name: '--logo-face-color',
      control: {
        type: 'color'
      }
    },
    highlightColor: {
      name: '--logo-hightlight-color',
      control: {
        type: 'color'
      }
    },
    shadowColor: {
      name: '--logo-shadow-color',
      control: {
        type: 'color'
      }
    }
  }
}

export const Logo = args => ({
  components: { EpicenterLogo },
  setup() {
    const styles = computed(() => {
      return {
        '--logo-face-color': args.faceColor,
        '--logo-hightlight-color': args.highlightColor,
        '--logo-shadow-color': args.shadowColor,
        '--logo-stroke-color': args.strokeColor,
        '--logo-stroke-width': args.strokeWidth,
      }
    })

    return { args, styles }
  },
  template: '<epicenter-logo v-bind="args" :width="args.size" :styles="styles" />'
})

Logo.args = {
  size: 200,
  strokeWidth: 2,
  strokeColor: 'hsl(var(--gray-500))',
  faceColor: '#fff16c',
  highlightColor: 'hsl(var(--gray-0))',
  shadowColor: 'hsl(var(--gray-500))'
}
