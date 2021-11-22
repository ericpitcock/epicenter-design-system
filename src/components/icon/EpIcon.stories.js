import EpContainer from '@/components/container/EpContainer.vue'
import svgIcons from './load-icons'
import EpIcon from './EpIcon'

const names = svgIcons.map(icon => icon.name)

// const container = () => {
//   return {
//     template:
//       `<div style="padding: 30px; display:flex; justify-content: center; gap: 10px; flex-wrap: wrap;>
//         <story/>
//       </div>`
//   }
// }

export default {
  title: 'Components/Icon',
  component: EpIcon,
  // decorators: [container],
  argTypes: {
    name: {
      name: 'Name',
      control: {
        type: 'select',
        options: names
      },
      defaultValue: 'arrow-up'
    },
    color: {
      name: 'Color',
      control: {
        type: 'text'
      },
      defaultValue: 'currentColor'
    },
    weight: {
      name: 'Weight',
      control: {
        type: 'select',
        options: ['extra-light', 'light', 'regular', 'bold']
      },
      defaultValue: 'regular'
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20, max: 60, step: 2
      },
      defaultValue: 20
    }
  }
}

const Template = (args) => ({
  components: { EpContainer, EpIcon },
  data: () => ({ svgIcons }),
  setup() {
    return { args }
  },
  template: `
  <div style="padding: 30px;
    display:flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;"
  >
  <ep-container v-for="(icon, index) in svgIcons"
    :key="index"
    style="flex: 0 0 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 20px 0;"
    >
      <EpIcon
        :name="icon.name"
        :color="args.color"
        :weight="args.weight"
        :size="args.size"
      />
      <div class="text--subtle">{{ icon.name }}</div>
    </ep-container>
  </div>
  `
})

export const Icon = Template.bind({})
