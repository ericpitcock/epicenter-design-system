import EpContainer from '@/components/container/EpContainer.vue'
import EpIcon from '@/components/icon/EpIcon.vue'
import { icons } from '../../helpers/iconHelper.js'
import { computed } from 'vue'

export default {
  title: 'Components/Icon Library',
  component: EpIcon,
  argTypes: {
    color: {
      name: 'Color',
      control: {
        type: 'color'
      }
    },
    weight: {
      name: 'Weight',
      options: ['Light', 'Regular', 'Medium', 'Bold'],
      mapping: {
        'Light': 0.5,
        'Regular': 1,
        'Medium': 1.5,
        'Bold': 2,
      },
      control: {
        type: 'radio'
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
    styles: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    }
  }
}

export const IconLibrary = args => ({
  components: { EpContainer, EpIcon },
  setup() {
    const styles = computed(() => {
      return {
        '--ep-icon-width': `${args.size}px`,
        '--ep-icon-height': `${args.size}px`,
        '--ep-icon-color': args.color,
        '--ep-icon-stroke-width': args.weight,
      }
    })

    return { args, icons, styles }
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
      v-for="(icon, index) in icons"
      useFooter
      :key="index"
      content-padding="2rem"
      border-radius="var(--border-radius)"
      background-color="var(--interface-surface)"
      style="flex: 0 0 170px;"
    >
      <ep-icon
        :name="icon"
        :color="args.color"
        :weight="args.weight"
        :size="args.size"
        :style="styles"
      />
      <template #footer>
      <div
        class="font-size--small text--subtle"
        style="padding: 1rem 2rem; border-top: 1px solid var(--border-color);"
      >{{ icon }}</div>
      </template>
    </ep-container>
  </div>
  `
})

IconLibrary.args = {
  color: 'currentColor',
  weight: 'Light',
  size: 42
}

IconLibrary.argTypes = {
  name: {
    table: { disable: true }
  }
}
