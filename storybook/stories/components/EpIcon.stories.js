import EpContainer from '@/components/container/EpContainer.vue'
import EpIcon from '@/components/icon/EpIcon.vue'
import { iconNamesObject } from '../../helpers/iconHelper.js'
import { centeredSurface } from '../../helpers/decorators.js'
import { iconArgTypes } from '../../helpers/iconArgTypes.js'

export default {
  title: 'Components/Icon',
  component: EpIcon,
  argTypes: iconArgTypes
  // argTypes: {
  //   name: {
  //     name: 'Name',
  //     options: iconOptions,
  //     control: {
  //       type: 'select'
  //     }
  //   },
  //   color: {
  //     name: 'Color',
  //     control: {
  //       type: 'color'
  //     }
  //   },
  //   weight: {
  //     name: 'Weight',
  //     options: ['extra-light', 'light', 'regular', 'bold'],
  //     control: {
  //       type: 'radio'
  //     }
  //   },
  //   size: {
  //     name: 'Size',
  //     control: {
  //       type: 'range',
  //       min: 20,
  //       max: 60,
  //       step: 2
  //     }
  //   },
  //   type: {
  //     table: { disable: true }
  //   }
  // }
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
      border-radius="var(--border-radius)"
      background-color="var(--interface-surface)"
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
