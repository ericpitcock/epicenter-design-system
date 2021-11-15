import EpToast from './EpToast.vue'

export default {
  title: 'Components/Toast',
  component: EpToast,
  argTypes: {
    message: {
      name: 'Message',
      control: {
        type: 'text'
      },
      defaultValue: 'Hello World!'
    },
    dissmissable: {
      name: 'Dissmissable',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpToast },
  props: Object.keys(argTypes),
  template: '<EpToast :message="message" :dissmissable="dissmissable" />'
})

export const Toast = Template.bind({})