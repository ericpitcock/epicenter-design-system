import EpContainer from '@/components/container/EpContainer.vue'
import { svgIcons, iconNames } from './load-icons'
import EpIcon from './EpIcon'
import { centered } from '@/helpers/decorators.js'

export default {
  title: 'Icon',
  component: EpIcon,
  argTypes: {
    name: {
      name: 'Name',
      control: {
        type: 'select',
        options: iconNames
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
        type: 'radio',
        options: ['extra-light', 'light', 'regular', 'bold']
      },
      defaultValue: 'regular'
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 60,
        step: 2
      },
      defaultValue: 20
    },
    type: {
      table: { disable: true }
    }
  }
}

export const Icon = args => ({
  components: { EpIcon },
  setup() {
    return { args }
  },
  template: '<ep-icon v-bind="args" />'
})
Icon.decorators = [centered]

export const IconLibrary = args => ({
  components: { EpContainer, EpIcon },
  setup() {
    return { args, svgIcons }
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
      <ep-icon
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
