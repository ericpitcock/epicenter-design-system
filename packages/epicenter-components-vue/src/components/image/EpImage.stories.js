import { EpImage } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'

const imageLabels = {
  '/sea-downtown-landscape.png': 'Downtown Landscape',
  '/sea-downtown-portrait.png': 'Downtown Portrait',
  '/sea-portrait-drawing.png': 'Portrait Drawing',
  '/sea-trail-landscape.png': 'Trail Landscape',
}

export default {
  title: 'Components/Image',
  component: EpImage,
  decorators: [withCssProps('image'), centeredSurface],
  argTypes: {
    src: {
      options: Object.keys(imageLabels),
      control: {
        type: 'select',
        labels: imageLabels,
      },
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternate text for the image',
    },
    className: {
      control: 'text',
      description: 'Class name(s) applied to the rendered img element',
    },
    width: {
      control: 'text',
      description: 'Width of the image and its placeholder',
    },
    height: {
      control: 'text',
      description: 'Height of the image and its placeholder',
    },
    lazy: {
      control: 'boolean',
      description: 'Defer loading until the image scrolls into view',
    },
    placeholder: {
      options: ['', ...Object.keys(imageLabels)],
      control: {
        type: 'select',
        labels: { '': 'None', ...imageLabels },
      },
      description: 'Background image shown while the image loads',
    },
    placeholderColor: {
      control: 'color',
      description: 'Background color shown while the image loads',
    },
    placeholderOpacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05,
      },
      description: 'Opacity of the placeholder',
    },
  
    ...cssPropArgTypes('image'),
  },
}

const Template = (args) => ({
  components: { EpImage },
  setup() {
    return { args }
  },
  // EpImage only loads on mount, so remount on arg changes
  // to replay the placeholder → image cycle
  template: `
    <EpImage
      v-bind="args"
      :key="JSON.stringify(args)"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  src: '/sea-downtown-landscape.png',
  alt: 'Seattle downtown landscape view',
  className: '',
  width: '600px',
  height: '400px',
  lazy: true,
  placeholder: '',
  placeholderColor: '#f5f5f5',
  placeholderOpacity: 1,
}
