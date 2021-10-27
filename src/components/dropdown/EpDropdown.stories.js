import EpDropdown from './EpDropdown'

// const container = () => {
//   return {
//     template:
//       '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  // decorators: [container],
  argTypes: {
    buttonKind: {
      name: 'Button Kind',
      control: {
        type: 'radio',
        options: {
          Primary: 'primary',
          Secondary: 'secondary',
          Naked: 'naked',
          Danger: 'danger',
          Warning: 'warning',
          Success: 'success'
        }
      } 
    },
    buttonLabel: {
      name: 'Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Dropdown'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpDropdown },
  props: Object.keys(argTypes),
  template: `
  <EpDropdown
    :buttonKind="kind"
    :buttonLabel="label"
  />
  `
})

export const Dropdown = Template.bind({})
