import { centered } from '../../helpers/decorators'
import EpSelect from '@/components/select/EpSelect'

export default {
  title: 'Components/Select',
  component: EpSelect,
  decorators: [centered],
  argTypes: {
    height: {
      control: {
        type: 'text'
      }
    },
    iconLeft: {
      control: {
        type: 'object'
      }
    },
    id: {
      control: {
        type: 'text'
      }
    },
    options: {
      control: {
        type: 'array'
      }
    },
    modelValue: { table: { disable: true } },
    placeholder: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = args => ({
  components: { EpSelect },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 300px">
      <ep-select v-bind="args" />
    </div>
    `
})

export const Select = Template.bind({})

Select.args = {
  id: 'select',
  iconLeft: { name: 'search' },
  placeholder: 'Make a selection…',
  options: [
    {
      label: 'Option 1',
      value: 'option-1'
    },
    {
      label: 'Option 2',
      value: 'option-2'
    },
    {
      label: 'Option 3',
      value: 'option-3'
    }
  ]
}