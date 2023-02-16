import { padded } from '@/helpers/decorators'
import AlbumsOfTheYear from './AlbumsOfTheYear'

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

export const BreadcrumbInContext = Template.bind({})

BreadcrumbInContext.parameters = {
  controls: { hideNoControlsWarning: true }
}