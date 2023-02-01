import EpNamingConventions from './EpNamingConventions.vue'

export default {
  title: 'Docs/Naming Conventions',
  component: EpNamingConventions,
}

const Template = args => ({
  components: { EpNamingConventions },
  setup() {
    return { args }
  },
  template: '<ep-naming-conventions v-bind="args" />'
})

export const NamingConventions = Template.bind({})