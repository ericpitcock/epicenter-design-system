import EpContainer from '@/components/container/EpContainer.vue'
import EpIcon from '@/components/icon/EpIcon.vue'
import { iconNamesObject, iconNamesArray, iconNamesMapping } from '@/components/icon/load-icons.js'
// const iconNames = await loadIcons()
// import generateIconNames from '../../helpers/iconHelper.js'
// const { iconNames } = generateIconNames(await loadIcons())
// import { iconNames } from '../../helpers/iconHelper.js'
import { centeredSurface } from '../../helpers/decorators.js'
import { watch } from 'vue'

console.log(iconNamesObject)

export default {
  title: 'Components/Icon',
  component: EpIcon,
  argTypes: {
    name: {
      name: 'Name',
      options: iconNamesArray,
      // mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
    color: {
      name: 'Color',
      control: {
        type: 'color'
      }
    },
    weight: {
      name: 'Weight',
      options: ['extra-light', 'light', 'regular', 'bold'],
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
    type: {
      table: { disable: true }
    }
  }
}

export const Icon = args => ({
  components: { EpIcon },
  setup() {
    // watch icon for changes

    watch(() => args.weight, (newVal, oldVal) => {
      console.log('weight changed', newVal, oldVal)
    })

    return { args }
  },
  template: '<ep-icon v-bind="args" />'
})

Icon.args = {
  name: 'arrow-up',
  color: 'currentColor',
  weight: 'light',
  size: 60
}

Icon.decorators = [centeredSurface]

export const IconLibrary = args => ({
  components: { EpContainer, EpIcon },
  setup() {
    return { args, iconNamesObject }
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
      v-for="(icon, index) in iconNamesObject"
      useFooter
      :key="index"
      content-padding="2rem"
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
  color: 'currentColor',
  weight: 'light',
  size: 34
}

IconLibrary.argTypes = {
  name: {
    table: { disable: true }
  }
}
