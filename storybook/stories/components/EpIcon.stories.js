import EpContainer from '@/components/container/EpContainer.vue'
import { svgIcons, iconNames } from '@/components/icon/load-icons'
import EpIcon from '@/components/icon/EpIcon'
import { centered } from '@/helpers/decorators.js'

export default {
  title: 'Components/Icon',
  component: EpIcon,
  argTypes: {
    name: {
      name: 'Name',
      control: {
        type: 'select',
        options: iconNames
      }
    },
    color: {
      name: 'Color',
      control: {
        type: 'text'
      }
    },
    weight: {
      name: 'Weight',
      control: {
        type: 'radio',
        options: ['extra-light', 'light', 'regular', 'bold']
      }
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 60,
        step: 2
      }
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

Icon.args = {
  name: 'arrow-up',
  color: 'currentcolor',
  weight: 'regular',
  size: 20
}

Icon.decorators = [centered]

export const IconLibrary = args => ({
  components: { EpContainer, EpIcon },
  setup() {
    return { args, svgIcons }
  },
  template: `
  <div style="padding: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;"
  >
    <ep-container
      v-for="(icon, index) in svgIcons"
      useFooter
      :key="index"
      padding="2rem"
      borderRadius="var(--border-radius)"
      style="flex: 0 0 170px;"
    >
      <ep-icon
        :name="icon.name"
        :color="args.color"
        :weight="args.weight"
        :size="args.size"
      />
      <template #footer>
      <div
        class="font-size--small text--subtle"
        style="padding: 1rem 2rem; border-top: 1px solid var(--border-color);"
      >{{ icon.name }}</div>
      </template>
    </ep-container>
  </div>
  `
})

IconLibrary.args = {
  color: 'currentcolor',
  weight: 'light',
  size: 34
}
