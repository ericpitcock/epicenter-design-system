import { EpTimeline } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { paddedBg } from '@sb/helpers/decorators.js'

const items = [
  {
    date: '2024-03-02',
    title: 'Project kickoff',
    description: 'Repo created, tooling chosen, first commit pushed.',
    tags: ['Setup'],
    variant: 'primary'
  },
  {
    date: '2024-06-18',
    title: 'First release',
    description: 'Shipped to the package registry behind a beta tag.',
    tags: ['Release'],
    variant: 'success'
  },
  {
    date: '2024-09-05',
    title: 'Breaking API change',
    description: 'Renamed every public export. Consumers had to update imports.',
    tags: ['Breaking'],
    variant: 'danger'
  },
  {
    date: '2025-01-11',
    title: 'Docs site',
    description: 'Reference pages generated straight from source.'
  }
]

export default {
  title: 'Components/Timeline',
  component: EpTimeline,
  decorators: [withCssProps('timeline'), paddedBg],
  argTypes: {
    semanticDates: {
      name: 'Semantic dates',
      description: 'Render dates in a <time> element with a datetime attribute',
      control: { type: 'boolean' }
    },
    ...cssPropArgTypes('timeline')
  }
}

export const Timeline = args => ({
  components: { EpTimeline },
  setup() {
    return { args, items }
  },
  template: `<ep-timeline v-bind="args" :items="items" />`
})

Timeline.args = { semanticDates: true }

export const CustomItem = args => ({
  components: { EpTimeline },
  setup() {
    return { args, items }
  },
  template: `
    <ep-timeline v-bind="args" :items="items">
      <template #item="{ item, isLast }">
        <strong>{{ item.title }}</strong>
        <span class="font-size--small" style="color: var(--text-color--subtle);">
          {{ item.date }}{{ isLast ? ' — most recent' : '' }}
        </span>
      </template>
    </ep-timeline>
  `
})

CustomItem.args = { semanticDates: true }

export const Empty = args => ({
  components: { EpTimeline },
  setup() {
    return { args }
  },
  template: `
    <ep-timeline v-bind="args" :items="[]">
      <template #empty>
        <p style="color: var(--text-color--subtle);">Nothing has happened yet.</p>
      </template>
    </ep-timeline>
  `
})
