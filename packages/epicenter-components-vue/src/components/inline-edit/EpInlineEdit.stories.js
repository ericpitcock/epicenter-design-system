import { paddedSurface } from '@sb/helpers/decorators.js'
import { componentNames, useIcons } from '@sb/helpers/useIcons.js'
import { ref, toRef } from 'vue'

import EpInlineEdit from '@/components/inline-edit/EpInlineEdit.vue'

export default {
  title: 'Components/Inline Edit',
  component: EpInlineEdit,
  decorators: [paddedSurface],
  argTypes: {
    modelValue: {
      table: { disable: true }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    enabledIcons: {
      name: 'Enable Icon Left',
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Icons'
      }
    },
    iconLeft: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Left',
      options: componentNames,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
  }
}

export const InlineEdit = args => ({
  components: { EpInlineEdit },
  setup() {
    const modelValue = ref(args.modelValue)

    const { iconLeftComponent } = useIcons(
      toRef(args, 'iconLeft'),
    )

    const onSave = (value) => {
      console.log('save', value)
    }

    return {
      args,
      modelValue,
      iconLeftComponent,
      onSave,
    }
  },
  template: `
    <ep-inline-edit
      v-bind="args"
      v-model="modelValue"
      @save="onSave"
    >
      <template
        v-if="iconLeftComponent"
        #icon-left
      >
        <component :is="iconLeftComponent" />
      </template>
    </ep-inline-edit>
  `
})

InlineEdit.args = {
  modelValue: 'Click to edit this text',
  disabled: false,
  enabledIcons: false,
  iconLeft: 'None',
}
