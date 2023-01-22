import faker from 'faker'
import EpAutocomplete from './EpAutocomplete.vue'

const fakeArray = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.datatype.uuid(),
      name: faker.address.city(),
    })
  }
  return arr
}

export default {
  title: 'Components/Autocomplete',
  component: EpAutocomplete,
  argTypes: {
    items: {
      control: {
        type: 'object'
      },
      defaultValue: fakeArray(100)
    }
  }
}

const Template = (args) => ({
  components: { EpAutocomplete },
  setup() {
    return { args }
  },
  template: '<EpAutocomplete v-bind="args" />'
})

export const Autocomplete = Template.bind({})