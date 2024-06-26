import { paddedSurface } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '../../helpers/iconHelper.js'
import EpInput from '@/components/input/EpInput.vue'
import { ref } from 'vue'

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
    placeholderColor: {
      name: 'Placeholder Color',
      control: {
        type: 'color'
      }
    },
    modelValue: {
      table: {
        disable: true
      }
    },
    iconLeft: {
      name: 'Icon Left',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    iconRight: {
      name: 'Icon Right',
      options: iconOptions,
      mapping: iconMapping,
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
    width: {
      name: 'Width',
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
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text'
      }
    },
    borderStyle: {
      name: 'Border Style',
      control: {
        type: 'text'
      }
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      }
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      }
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
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

    return { args, modelValue, clear }
  },
  template: `
    <ep-input
      v-bind="args"
      v-model="modelValue"
      @clear="clear"
      data-1p-ignore
    />
  `
})

Input.args = {
  id: '',
  label: 'This is the label and placeholder',
  type: 'text',
  placeholder: '',
  placeholderColor: '',
  modelValue: '',
  clearable: true,
  disabled: false,
  autofocus: false,
  width: '400px',
  size: 'xlarge',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  borderRadius: '0.3rem',
  backgroundColor: 'var(--interface-foreground)',
}