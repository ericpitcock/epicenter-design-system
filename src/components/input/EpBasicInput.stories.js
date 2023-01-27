import { centered } from '@/helpers/decorators'
import EpBasicInput from './EpBasicInput.vue'

export default {
  title: 'Components/Basic Input',
  component: EpBasicInput,
  decorators: [centered],
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'tel', 'url']
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    icon: {
      name: 'Icon',
      control: {
        type: 'object'
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
    height: {
      name: 'Height',
      control: {
        type: 'text'
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

const Template = args => ({
  components: { EpBasicInput },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 300px;">
      <ep-basic-input v-bind="args" />
    </div>
  `
})

export const BasicInput = Template.bind({})

BasicInput.args = {
  type: 'text',
  placeholder: 'Placeholder',
  icon: null,
  clearable: true,
  disabled: false,
  autofocus: false,
  width: '100%',
  height: '40px',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: 'var(--border-color)',
  borderRadius: 'var(--border-radius)',
  backgroundColor: 'var(--background-2)',
  color: 'var(--text-color)'
}