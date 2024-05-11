import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'
import { computed } from 'vue'

export default {
  title: 'Components/Logo',
  component: EpicenterLogo,
  // decorators: [centered],
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 200,
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
    const containerStyle = {
      position: 'relative',
      display: 'grid',
      placeContent: 'center',
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle 200px at -5% -10%, hsl(60, 100%, 50%), transparent),
      linear-gradient(130deg, hsl(164, 93%, 50%) 0%, var(--primary-color-base) 79%)`,
      overflow: 'hidden'
    }

    const styles = computed(() => {
      return {
        '--logo-face-color': args.faceColor,
        '--logo-hightlight-color': args.highlightColor,
        '--logo-shadow-color': args.shadowColor,
        '--logo-stroke-color': args.strokeColor,
        '--logo-stroke-width': args.strokeWidth,
      }
    })

    return { args, containerStyle, styles }
  },
  template: `
    <div :style="containerStyle">
      <div class="bounding-box" :style="{ width: args.size + 'px' }">
        <epicenter-logo v-bind="args" :styles="styles" />
      </div>
    </div>
  `
})

Logo.args = {
  size: 200,
  strokeWidth: 2,
  strokeColor: 'hsl(var(--gray-500))',
  faceColor: '#fff16c',
  highlightColor: 'hsl(var(--gray-0))',
  shadowColor: 'hsl(var(--gray-500))'
}
