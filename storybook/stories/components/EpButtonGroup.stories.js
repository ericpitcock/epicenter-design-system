import { ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'

import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Button/Button Group',
  decorators: [centeredBg],
  argTypes: {
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    variant: {
      name: 'Active Variant',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          success: 'Success',
          warning: 'Warning',
          danger: 'Danger'
        }
      }
    }
  }
}

export const ButtonGroup = args => ({
  components: { EpButton },
  setup() {
    const buttonItems = ['Taco', 'Burrito', 'Enchilada', 'Quesadilla', 'Pupusa']
    const activeIndex = ref(0)

    const setActive = (index) => {
      activeIndex.value = index
    }

    return { args, activeIndex, buttonItems, setActive }
  },
  template: `
    <div class="ep-button-group">
      <ep-button
        v-for="(item, index) in buttonItems"
        :key="item"
        :size="args.size"
        :class="{ ['ep-button-var--' + args.variant + ' ep-button-group--selected']: activeIndex === index }"
        @click="setActive(index)"
      >
        {{ item }}
      </ep-button>
    </div>
  `
})

ButtonGroup.args = {
  size: 'large',
  variant: 'primary'
}
