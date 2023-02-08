import { padded } from '@/helpers/decorators'
import AlbumsOfTheYear from '@/components/breadcrumb/AlbumsOfTheYear'

export default {
  title: 'Components/Breadcrumb',
  component: AlbumsOfTheYear,
  decorators: [padded],
  argTypes: {}
}

const Template = args => ({
  components: {
    AlbumsOfTheYear
  },
  setup() {
    return { args }
  },
  template: '<albums-of-the-year />'
})

export const Breadcrumb = Template.bind({})

Breadcrumb.parameters = {
  controls: { hideNoControlsWarning: true }
}