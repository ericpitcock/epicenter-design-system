import EpNotification from './EpNotification'

// const container = () => {
//   return {
//     template:
//       '<div style="padding: 30px; display:flex; justify-content: center;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Notification',
  component: EpNotification,
  // decorators: [container],
  argTypes: {
  }
}

const Template = (args) => ({
  components: { EpNotification },
  setup() {
    return { args }
  },
  template: `
  <ep-notification />
  `
})

export const Notification = Template.bind({})
