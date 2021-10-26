import EpIcons from './EpIcons'

// const container = () => {
//   return {
//     template:
//       '<div style="padding: 30px; display:flex; justify-content: center;"><story/></div>'
//   }
// }

export default {
  title: 'Style/Icons',
  component: EpIcons,
  // decorators: [container]
}

const Template = () => ({
  components: { EpIcons },
  template: `<EpIcons />`
})

export const Icons = Template.bind({})
