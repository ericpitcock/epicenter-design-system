import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
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
      name: 'Icon',
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
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
  iconLeft: { name: 'f/coffee' },
  placeholder: 'Select your coffee type…',
  options: [
    {
      label: 'Drip Coffee',
      value: 'drip'
    },
    {
      label: 'Espresso',
      value: 'espresso'
    },
    {
      label: 'Cold Brew',
      value: 'cold-brew'
    },
    {
      label: 'French Press',
      value: 'french-press'
    },
    {
      label: 'Pour Over',
      value: 'pour-over'
    },
    {
      label: 'Chemex',
      value: 'chemex'
    },
    {
      label: 'Aeropress',
      value: 'aeropress'
    }
  ]
}