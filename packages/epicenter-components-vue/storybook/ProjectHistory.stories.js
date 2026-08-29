import { EpTimeline } from '@ericpitcock/epicenter-components-vue'
import { paddedBg } from '@sb/helpers/decorators.js'

import milestones from './data/project-history.json'

const REPO_URL = 'https://github.com/ericpitcock/epicenter-design-system/commit/'

export default {
  title: 'History',
  component: EpTimeline,
  decorators: [paddedBg],
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const formatDate = date =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })

const commitUrl = commit => `${REPO_URL}${commit}`

export const History = () => ({
  components: { EpTimeline },
  setup() {
    return { commitUrl, formatDate, milestones }
  },
  template: `
    <div style="max-width: 78rem; margin-inline: auto;">
      <header style="margin-block-end: var(--space--8);">
        <h1 style="color: var(--text-color--loud); font-size: var(--font-size--jumbo);">
          Six years of the Epicenter Design System
        </h1>
        <p style="max-width: 62ch; margin-block-start: var(--space--2); color: var(--text-color--subtle); font-size: var(--font-size--small);">
          {{ milestones.length }} milestones, from the first commit in August 2020
          to the most recent one. Drawn from 1,401 commits &mdash; the ones that
          changed the shape of the thing, not every fix along the way.
        </p>
      </header>
      <ep-timeline :items="milestones">
        <template #item="{ item }">
          <time class="ep-timeline__date" :datetime="item.date">
            {{ formatDate(item.date) }}
          </time>
          <h3 class="ep-timeline__title">{{ item.title }}</h3>
          <p v-if="item.description" class="ep-timeline__description">
            {{ item.description }}
          </p>
          <div class="ep-timeline__tags">
            <span v-for="tag in item.tags" :key="tag" class="ep-badge">{{ tag }}</span>
            <a
              class="ep-badge"
              style="font-family: monospace; text-decoration: none;"
              :href="commitUrl(item.commit)"
              rel="noopener"
              target="_blank"
            >{{ item.commit }}</a>
          </div>
        </template>
      </ep-timeline>
    </div>
  `
})
