// import { centered } from '../../helpers/decorators'
import EpicenterLogo from '@/components/logo/EpicenterLogo.vue'

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
    strokeWidth: {
      name: 'Stroke width',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      }
    },
    strokeColor: {
      name: 'Stroke Color',
      control: {
        type: 'color'
      }
    },
    faceColor: {
      name: 'Face Color',
      control: {
        type: 'color'
      }
    },
    highlightColor: {
      name: 'Highlight Color',
      control: {
        type: 'color'
      }
    },
    shadowColor: {
      name: 'Shadow Color',
      control: {
        type: 'color'
      }
    }
  }
}

const Template = args => ({
  components: { EpicenterLogo },
  setup() {
    const containerStyle = {
      position: 'relative',
      display: 'grid',
      placeContent: 'center',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(130deg, #0af6b7 0%, var(--color--primary) 89%)'
    }
    const yellowCircle = {
      position: 'absolute',
      top: '-17rem',
      left: '-40rem',
      width: '60rem',
      height: '30rem',
      borderRadius: '50%',
      background: 'rgb(255, 255, 0)',
      opacity: '1',
      filter: 'blur(100px)',
    }

    const purpleCircle = {
      position: 'absolute',
      bottom: '-10%',
      right: '-20%',
      width: '60rem',
      height: '30rem',
      borderRadius: '50%',
      background: 'rgb(212, 12, 85)',
      opacity: '0.8',
      filter: 'blur(150px)',
    }

    return { args, containerStyle, yellowCircle, purpleCircle }
  },
  template: `
    <div :style="containerStyle">
      <div class="bounding-box" :style="{ width: args.size + 'px' }">
        <epicenter-logo v-bind="args" />
      </div>
      <div :style="yellowCircle" />
      <div :style="purpleCircle" />
    </div>
  `
})

export const Logo = Template.bind({})

Logo.args = {
  size: 200,
  strokeWidth: 3,
  strokeColor: '#000',
  faceColor: '#fff16c',
  highlightColor: '#fff',
  shadowColor: '#000'
}
