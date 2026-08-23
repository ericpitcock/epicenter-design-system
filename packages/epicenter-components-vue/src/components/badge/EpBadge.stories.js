import { EpBadge } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'

export default {
  title: 'Components/Badge',
  component: EpBadge,
  decorators: [withCssProps('badge', { if: { arg: 'classes', eq: 'Custom' } }), centeredSurface],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    },
    classes: {
      name: 'Style',
      options: [
        'Primary',
        'Success',
        'Warning',
        'Danger',
        'Custom',
      ],
      mapping: {
        None: null,
        Primary: { 'badge-variant-primary': true },
        Success: { 'badge-variant-success': true },
        Warning: { 'badge-variant-warning': true },
        Danger: { 'badge-variant-danger': true }
      },
      control: {
        type: 'radio',
      },
      table: {
        category: 'Styles'
      }
    },
    ...cssPropArgTypes('badge', { if: { arg: 'classes', eq: 'Custom' } }),
  }
}

export const Badge = args => ({
  components: {
    EpBadge
  },
  setup() {
    return { args }
  },
  template: `
    <ep-badge
      v-bind="args"
      :class="args.classes"
    >
      {{ args.label }}
    </ep-badge>
  `
})

Badge.args = {
  label: 'Subscribed',
  classes: 'Primary',
}
