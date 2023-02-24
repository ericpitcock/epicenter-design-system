import { centered } from '../../helpers/decorators'
import EpMultiSearch from '@/components/input/EpMultiSearch'

export default {
  title: 'Components/Multi Search',
  component: EpMultiSearch,
  decorators: [centered],
  argTypes: {
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

export const MultiSearch = args => ({
  components: { EpMultiSearch },
  setup() {
    return { args }
  },
  template: `<ep-multi-search v-bind="args" />`
})

MultiSearch.args = {
  placeholder: 'Search',
  width: '50rem',
  icon: { name: 'search' }
}