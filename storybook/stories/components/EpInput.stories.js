import { computed, ref, toRef } from 'vue'

import EpInput from '@/components/input/EpInput.vue'

import { paddedSurface } from '../../helpers/decorators.js'
import { componentNames, useIcons } from '../icons/useIcons.js'

export default {
  title: 'Components/Input',
  component: EpInput,
  decorators: [paddedSurface],
  argTypes: {
    inputId: {
      table: { disable: true }
    },
    required: {
      table: { disable: true }
    },
    readonly: {
      table: { disable: true }
    },
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'Type',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      control: {
        type: 'select',
        labels: {
          text: 'Text',
          password: 'Password',
          email: 'Email',
          number: 'Number',
          tel: 'Telephone',
          url: 'URL'
        }
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    modelValue: {
      table: {
        disable: true
      }
    },
    enabledIcons: {
      name: 'Enable Icons',
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
    iconRight: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      options: componentNames,
      // mapping: iconMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    clearable: {
      name: 'Clearable',
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    autofocus: {
      name: 'Autofocus',
      control: {
        type: 'boolean'
      }
    },
    size: {
      name: 'Size',
      options: ['default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'color'
      }
    },
    caretColor: {
      name: 'Caret Color',
      control: {
        type: 'color'
      }
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'color'
      }
    },
    placeholderColor: {
      name: 'Placeholder Color',
      control: {
        type: 'color'
      }
    },
    focusBorderColor: {
      name: 'Focus Border Color',
      control: {
        type: 'color'
      }
    },
    disabledTextColor: {
      name: 'Disabled Text Color',
      control: {
        type: 'color'
      }
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'number'
      }
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'color'
      }
    },
  }
}

export const Input = args => ({
  components: { EpInput },
  setup() {
    const modelValue = ref(args.modelValue)

    const clear = () => {
      modelValue.value = ''
    }

    const styles = computed(() => {
      return {
        // '--ep-input-font-size': var(--font-size--default);
        '--ep-input-text-color': args.textColor,
        '--ep-input-caret-color': args.caretColor,
        '--ep-input-border-color': args.borderColor,
        '--ep-input-border-radius': args.borderRadius + 'px',
        '--ep-input-placeholder-text-color': args.placeholderColor,
        '--ep-input-focus-border-color': args.focusBorderColor,
        '--ep-input-disabled-text-color': args.disabledTextColor,
      }
    })

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    return {
      args,
      modelValue,
      clear,
      styles,
      iconLeftComponent,
      iconRightComponent,
    }
  },
  template: `
    <ep-input
      v-bind="args"
      :style="styles"
      v-model="modelValue"
      @clear="clear"
      data-1p-ignore
    >
      <template
        v-if="iconLeftComponent"
        #icon-left
      >
        <component :is="iconLeftComponent" />
      </template>
      <template
        v-if="iconRightComponent"
        #icon-right
      >
        <component :is="iconRightComponent" @click="clear" />
      </template>
    </ep-input>
  `
})

Input.args = {
  inputId: '',
  label: 'What is your favorite word?',
  type: 'text',
  placeholder: 'Enter your favorite word',
  placeholderColor: '',
  modelValue: '',
  enabledIcons: true,
  iconLeft: 'None',
  iconRight: 'None',
  clearable: true,
  disabled: false,
  autofocus: false,
  size: 'xlarge',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  borderRadius: '0.3',
  backgroundColor: 'var(--interface-foreground)',
}