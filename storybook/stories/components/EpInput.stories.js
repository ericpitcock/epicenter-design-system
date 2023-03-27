import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
import EpInput from '@/components/input/EpInput.vue'

export default {
  title: 'Components/Input',
  component: EpInput,
  decorators: [centered],
  argTypes: {
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
    value: {
      name: 'Value',
      control: {
        type: 'text'
      }
    },
    iconLeft: {
      name: 'Icon Left',
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      },
      table: {
        category: 'Icons'
      }
    },
    iconRight: {
      name: 'Icon Right',
      options: iconNames,
      mapping: iconNamesMapping,
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
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio'
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
    color: {
      name: 'Color',
      control: {
        type: 'text'
      }
    }
  }
}

export const Input = args => ({
  components: { EpInput },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 300px;">
      <ep-input v-bind="args" />
    </div>
  `
})

Input.args = {
  type: 'text',
  placeholder: 'Placeholder',
  value: '',
  iconLeft: null,
  iconRight: { name: 'close' },
  clearable: true,
  disabled: false,
  autofocus: false,
  width: '100%',
  size: 'xlarge',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  borderRadius: 'var(--border-radius)',
  backgroundColor: 'var(--background-2)',
  color: 'var(--text-color)'
}