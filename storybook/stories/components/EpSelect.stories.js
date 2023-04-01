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
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
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
  }
}

export const Select = args => ({
  components: { EpSelect },
  setup() {
    return { args }
  },
  template: '<ep-select v-bind="args" />'
})

Select.args = {
  id: 'select',
  iconLeft: 'f/coffee',
  width: '400px',
  size: 'xlarge',
  placeholder: 'Select your coffee type…',
  disabled: false,
  autofocus: false,
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