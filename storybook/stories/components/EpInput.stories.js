import { computed, ref, toRef, watch } from 'vue'

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
    error: {
      name: 'Error',
      control: {
        type: 'boolean'
      }
    },
    errorMessage: {
      name: 'Error Message',
      control: {
        type: 'text'
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
      name: '--ep-input-text-color',
      control: {
        type: 'color'
      }
    },
    caretColor: {
      name: '--ep-input-caret-color',
      control: {
        type: 'color'
      }
    },
    borderColor: {
      name: '--ep-input-border-color',
      control: {
        type: 'color'
      }
    },
    placeholderColor: {
      name: '--ep-input-placeholder-text-color',
      control: {
        type: 'color'
      }
    },
    focusBorderColor: {
      name: '--ep-input-focus-border-color',
      control: {
        type: 'color'
      }
    },
    disabledTextColor: {
      name: '--ep-input-disabled-text-color',
      control: {
        type: 'color'
      }
    },
    fontSize: {
      name: '--ep-input-font-size (rem)',
      control: {
        type: 'text'
      }
    },
    borderRadius: {
      name: '--ep-input-border-radius',
      control: {
        type: 'number'
      }
    },
    backgroundColor: {
      name: '--ep-input-bg-color',
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
        '--ep-input-font-size': args.fontSize + 'rem',
        '--ep-input-text-color': args.textColor,
        '--ep-input-caret-color': args.caretColor,
        '--ep-input-border-color': args.borderColor,
        '--ep-input-bg-color': args.backgroundColor,
        '--ep-input-border-radius': args.borderRadius + 'rem',
        '--ep-input-placeholder-text-color': args.placeholderColor,
        '--ep-input-focus-border-color': args.focusBorderColor,
        '--ep-input-disabled-text-color': args.disabledTextColor,
      }
    })

    const { iconLeftComponent, iconRightComponent } = useIcons(
      toRef(args, 'iconLeft'),
      toRef(args, 'iconRight'),
    )

    watch(() => args.error, (newVal) => {
      if (newVal) {
        args.errorMessage = 'Sorry, bro, there’s been an error'
      } else {
        args.errorMessage = ''
      }
    })

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
    <div style="max-width: 400px;">
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
          v-if="iconRightComponent && !args.clearable"
          #icon-right
        >
          <component :is="iconRightComponent" @click="clear" />
        </template>
      </ep-input>
    </div>
  `
})

Input.args = {
  inputId: '',
  label: 'What is your favorite word?',
  type: 'text',
  placeholder: 'e.g., Serendipity',
  placeholderColor: '',
  modelValue: '',
  enabledIcons: false,
  fontSize: '1.3',
  iconLeft: 'None',
  iconRight: 'None',
  clearable: true,
  disabled: false,
  autofocus: false,
  error: false,
  errorMessage: '',
  size: 'xlarge',
  borderColor: 'var(--border-color)',
  borderRadius: '0.3',
  backgroundColor: 'var(--interface-foreground)',
}