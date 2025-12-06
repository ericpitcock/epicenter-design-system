import EpCarousel from '@/components/carousel/EpCarousel.vue'

import { centeredSurface } from '../../helpers/decorators.js'

export default {
  title: 'Components/Carousel',
  component: EpCarousel,
  decorators: [centeredSurface],
  argTypes: {
    images: {
      control: 'object',
      description: 'Array of image objects with src, alt, caption, aspectRatio, zoom, positionX, positionY, and captionPosition properties'
    }
  }
}

const Template = (args) => ({
  components: { EpCarousel },
  setup() {
    return { args }
  },
  template: `
    <EpCarousel v-bind="args" />
  `
})

export const Default = Template.bind({})
Default.args = {
  images: [
    {
      src: '/sea-downtown-landscape.png',
      alt: 'Seattle downtown landscape view',
      aspectRatio: '3/2',
      caption: 'Seattle Downtown',
      captionPosition: 'bottom-center'
    },
    {
      src: '/sea-downtown-portrait.png',
      alt: 'Seattle downtown portrait view',
      aspectRatio: '2/3',
      caption: 'Downtown Portrait',
      captionPosition: 'bottom-left'
    },
    {
      src: '/sea-portrait-drawing.png',
      alt: 'Seattle portrait drawing',
      aspectRatio: '2/3',
      caption: 'Portrait Drawing',
      captionPosition: 'top-right'
    },
    {
      src: '/sea-trail-landscape.png',
      alt: 'Seattle trail landscape',
      aspectRatio: '3/2',
      caption: 'Trail Landscape',
      captionPosition: 'bottom-right'
    }
  ]
}

export const WithZoomAndPositioning = Template.bind({})
WithZoomAndPositioning.args = {
  images: [
    {
      src: '/sea-downtown-landscape.png',
      alt: 'Seattle downtown landscape view - zoomed',
      aspectRatio: '3/2',
      zoom: 3,
      positionX: '30%',
      positionY: '50%',
      caption: 'Zoomed Downtown',
      captionPosition: 'center'
    },
    {
      src: '/sea-downtown-portrait.png',
      alt: 'Seattle downtown portrait view',
      aspectRatio: '2/3',
      caption: 'Standard View',
      captionPosition: 'bottom-center'
    },
    {
      src: '/sea-portrait-drawing.png',
      alt: 'Seattle portrait drawing - zoomed',
      aspectRatio: '2/3',
      zoom: 1.3,
      positionX: 'center',
      positionY: 'top',
      caption: 'PNW Sketch',
      captionPosition: 'top-center'
    },
    {
      src: '/sea-trail-landscape.png',
      alt: 'Seattle trail landscape',
      aspectRatio: '3/2',
      zoom: 1.3,
      positionY: 'top',
      caption: 'Trail Scene',
      captionPosition: 'left-center'
    }
  ]
}
