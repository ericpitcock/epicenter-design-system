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
      },
      defaultValue: 'text'
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'text'
      },
      defaultValue: 'Placeholder'
    },
    icon: {
      name: 'Icon',
      control: {
        type: 'object'
      },
      // defaultValue: { name: 'search' }
      defaultValue: null
    },
    clearable: {
      name: 'Clearable',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    autofocus: {
      name: 'Autofocus',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      },
      defaultValue: '100%'
    },
    height: {
      name: 'Height',
      control: {
        type: 'text'
      },
      defaultValue: '40px'
    },
    borderWidth: {
      name: 'Border Width',
      control: {
        type: 'text'
      },
      defaultValue: '0.1rem'
    },
    borderStyle: {
      name: 'Border Style',
      control: {
        type: 'text'
      },
      defaultValue: 'solid'
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--border-color)'
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--border-radius)'
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--background-2)'
    },
    color: {
      name: 'Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--text-color)'
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