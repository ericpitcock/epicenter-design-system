import { padded } from '../../../helpers/decorators.js'
import AlbumsOfTheYear from './AlbumsOfTheYear.vue'

export default {
  title: 'Components/Breadcrumb',
  component: AlbumsOfTheYear,
  decorators: [padded],
  argTypes: {}
}

export const BreadcrumbInContext = args => ({
  components: {
    AlbumsOfTheYear
  },
  setup() {
    return { args }
  },
  template: '<albums-of-the-year />'
})

BreadcrumbInContext.parameters = {
  controls: { hideNoControlsWarning: true }
}