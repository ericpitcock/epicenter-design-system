import { useClipboard } from '@vueuse/core'
import { computed, ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'

import GradientBox from './GradientBox.vue'

// Generate argTypes for gradient stops
const generateStopArgTypes = (maxStops) => {
  const argTypes = {}

  for (let i = 0; i < maxStops; i++) {
    const stopNum = i.toString().padStart(2, '0')

    argTypes[`stop${stopNum}Hue`] = {
      name: `Hue`,
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1
      },
      table: {
        category: `Stop ${i + 1}`
      }
    }

    argTypes[`stop${stopNum}Saturation`] = {
      name: `Saturation`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Stop ${i + 1}`
      }
    }

    argTypes[`stop${stopNum}Lightness`] = {
      name: `Lightness`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Stop ${i + 1}`
      }
    }

    argTypes[`stop${stopNum}Alpha`] = {
      name: `Alpha`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Stop ${i + 1}`
      }
    }

    argTypes[`stop${stopNum}Position`] = {
      name: `Position (%)`,
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      table: {
        category: `Stop ${i + 1}`
      }
    }
  }

  return argTypes
}

export default {
  title: 'Components/Gradient Playground',
  component: GradientBox,
  argTypes: {
    gradientType: {
      name: 'Gradient Type',
      options: [
        'linear-gradient',
        'radial-gradient',
        'conic-gradient',
        'repeating-linear-gradient',
        'repeating-radial-gradient',
        'repeating-conic-gradient'
      ],
      control: {
        type: 'select'
      },
      table: {
        category: 'Gradient Settings'
      }
    },
    angle: {
      name: 'Angle (deg) - Linear only',
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1
      },
      table: {
        category: 'Gradient Settings'
      }
    },
    radialShape: {
      name: 'Shape - Radial only',
      options: ['circle', 'ellipse'],
      control: {
        type: 'radio'
      },
      table: {
        category: 'Gradient Settings'
      }
    },
    radialSize: {
      name: 'Size - Radial only',
      options: ['closest-side', 'closest-corner', 'farthest-side', 'farthest-corner'],
      control: {
        type: 'select'
      },
      table: {
        category: 'Gradient Settings'
      }
    },
    numberOfStops: {
      name: 'Number of Stops',
      control: {
        type: 'range',
        min: 2,
        max: 10,
        step: 1
      },
      table: {
        category: 'Gradient Settings'
      }
    },
    ...generateStopArgTypes(10)
  }
}

export const GradientPlayground = (args) => ({
  components: { GradientBox, EpButton },
  setup() {
    const gradient = computed(() => {
      const stops = []

      // Build color stops based on numberOfStops
      for (let i = 0; i < args.numberOfStops; i++) {
        const stopNum = i.toString().padStart(2, '0')
        const hue = args[`stop${stopNum}Hue`]
        const saturation = args[`stop${stopNum}Saturation`]
        const lightness = args[`stop${stopNum}Lightness`]
        const alpha = args[`stop${stopNum}Alpha`] / 100
        const position = args[`stop${stopNum}Position`]

        const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
        stops.push(`${color} ${position}%`)
      }

      const stopsString = stops.join(', ')

      // Build gradient based on type
      switch (args.gradientType) {
        case 'linear-gradient':
        case 'repeating-linear-gradient':
          return `${args.gradientType}(${args.angle}deg, ${stopsString})`

        case 'radial-gradient':
        case 'repeating-radial-gradient':
          return `${args.gradientType}(${args.radialShape} ${args.radialSize}, ${stopsString})`

        case 'conic-gradient':
        case 'repeating-conic-gradient':
          return `${args.gradientType}(from ${args.angle}deg, ${stopsString})`

        default:
          return `linear-gradient(${args.angle}deg, ${stopsString})`
      }
    })

    const source = ref('')
    const { copy } = useClipboard({ source })

    const copyGradientToClipboard = () => {
      copy(gradient.value)
    }

    return { args, gradient, copyGradientToClipboard }
  },
  template: `
    <div style="width: 100%; height: 100vh;">
      <GradientBox :gradient="gradient" style="width: 100%; height: 100%;"></GradientBox>
      <!-- <div style="display: flex; flex-direction: column; gap: 10px;">
        <ep-button class="ep-button-var--primary" @click="copyGradientToClipboard">
          Copy CSS
        </ep-button>
        <code style="padding: 10px; background: rgba(0,0,0,0.1); border-radius: 4px; max-width: 400px; word-break: break-all; font-size: 12px;">
          {{ gradient }}
        </code>
      </div> -->
    </div>
  `
})

// Default gradient: Purple to pink
GradientPlayground.args = {
  gradientType: 'linear-gradient',
  angle: 90,
  radialShape: 'circle',
  radialSize: 'farthest-corner',
  numberOfStops: 3,

  // Stop 1 - Purple
  stop00Hue: 270,
  stop00Saturation: 70,
  stop00Lightness: 50,
  stop00Alpha: 100,
  stop00Position: 0,

  // Stop 2 - Pink
  stop01Hue: 320,
  stop01Saturation: 80,
  stop01Lightness: 60,
  stop01Alpha: 100,
  stop01Position: 50,

  // Stop 3 - Orange
  stop02Hue: 20,
  stop02Saturation: 90,
  stop02Lightness: 60,
  stop02Alpha: 100,
  stop02Position: 100,

  // Remaining stops (defaults for when numberOfStops increases)
  stop03Hue: 180,
  stop03Saturation: 70,
  stop03Lightness: 55,
  stop03Alpha: 100,
  stop03Position: 75,

  stop04Hue: 240,
  stop04Saturation: 65,
  stop04Lightness: 60,
  stop04Alpha: 100,
  stop04Position: 80,

  stop05Hue: 120,
  stop05Saturation: 60,
  stop05Lightness: 50,
  stop05Alpha: 100,
  stop05Position: 83,

  stop06Hue: 60,
  stop06Saturation: 70,
  stop06Lightness: 55,
  stop06Alpha: 100,
  stop06Position: 86,

  stop07Hue: 30,
  stop07Saturation: 75,
  stop07Lightness: 60,
  stop07Alpha: 100,
  stop07Position: 89,

  stop08Hue: 340,
  stop08Saturation: 80,
  stop08Lightness: 65,
  stop08Alpha: 100,
  stop08Position: 92,

  stop09Hue: 280,
  stop09Saturation: 70,
  stop09Lightness: 60,
  stop09Alpha: 100,
  stop09Position: 95,
}