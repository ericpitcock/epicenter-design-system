import { ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpTooltip from '@/components/tooltip/EpTooltip.vue'

import { centeredBg } from '@sb/helpers/decorators.js'

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
    },
    disabled: {
      name: 'Tooltip Disabled',
      control: 'boolean'
    }
  }
}

export const ButtonGroup = args => ({
  components: { EpButton, EpTooltip },
  setup() {
    const buttonItems = [
      {
        label: 'Taco',
        tooltip: '¡Delicious!',
      },
      {
        label: 'Burrito',
        tooltip: '¡Fantastic!',
      },
      {
        label: 'Enchilada',
        tooltip: '¡Yummy!',
      },
      {
        label: 'Quesadilla',
        tooltip: '¡Cheesy!',
      },
      {
        label: 'Pupusa',
        tooltip: '¡Savory stuffed corn tortillas from El Salvador!',
      }
    ]
    const activeIndex = ref(0)

    const setActive = (index) => {
      activeIndex.value = index
    }

    return { args, activeIndex, buttonItems, setActive }
  },
  template: `
    <div class="ep-button-group">
      <ep-tooltip
        v-for="(item, index) in buttonItems"
        :key="item"
        position="top center"
        dismiss-on-click
        :disabled="args.disabled"
      >
        <template #tooltip>
          <div>{{ item.tooltip }}</div>
        </template>
        <ep-button
          :size="args.size"
          :class="{ ['ep-button-var--' + args.variant + ' ep-button-group--selected']: activeIndex === index }"
          @click="setActive(index)"
        >
          {{ item.label }}
        </ep-button>
      </ep-tooltip>
    </div>
  `
})

ButtonGroup.args = {
  size: 'large',
  variant: 'primary',
  disabled: false
}
