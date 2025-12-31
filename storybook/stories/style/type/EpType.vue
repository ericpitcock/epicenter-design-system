<script setup>
  import { faker } from '@faker-js/faker'
  import { ref } from 'vue'

  import EpContainer from '@/components/container/EpContainer.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import EpTabContent from '@/components/tabs/EpTabContent.vue'
  import EpTabs from '@/components/tabs/EpTabs.vue'
  import { useTabs } from '@/composables'

  import TextColorItem from './TextColorItem.vue'

  const { activeTab, setActiveTab } = useTabs(1)

  const textColors = ref([
    { variant: 'default', description: 'AAA compliant body text' },
    { variant: 'disabled', description: 'Intentionally low contrast for disabled states' },
    { variant: 'subtle', description: 'Supporting text, labels, and metadata' },
    { variant: 'loud', description: 'High contrast for headings and emphasis' },
    { variant: 'inverse', description: 'Black text in dark mode, white text in light mode' },
    { variant: 'primary', description: 'Brand color for emphasized text' },
    { variant: 'link', description: 'Hyperlinks and interactive text' },
    { variant: 'danger', description: 'Errors and destructive actions' },
    { variant: 'warning', description: 'Warnings and cautions' },
    { variant: 'success', description: 'Success states and confirmations' },
  ])

  const tabs = ref(['Type Scale', 'Color'])
  const typeScale = ref([
    {
      name: 'Jumbo',
      // desc: 'Page headers',
      meta: [
        'font-size: 2.6rem (26px)',
        'font-weight: 300'
      ],
      sample: '<h1>Man walks on the moon</h1>'
    },
    {
      name: 'Large',
      // desc: 'headers',
      meta: [
        'font-size: 2rem (20px)',
        'font-weight: 300'
      ],
      sample: '<h2>Millions watch from around the world</h2>'
    },
    {
      name: 'Body',
      // desc: 'Blocks of text you expect people to read',
      meta: [
        'font-size: 1.5rem (15px)',
        'line-height: 2.4rem (24px)',
        'font-weight: 500',
        'max-width: 60rem (600px)'
      ],
      sample: `<div class="copy-block"><p>Used for larger copy blocks to provide a nice, comfortable reading experience. ${faker.lorem.sentences(6)}</p></div>`
    },
    {
      name: 'Default',
      // desc: 'Default UI text for ',
      meta: [
        'font-size: 1.3rem (13px)',
        'font-weight: 500'
      ],
      sample: '<div style="max-width: 350px; line-height: 1.4;">Default for most UI text strings, like tables and form fields. Also used for larger button and input variants.</div>'
    },
    {
      name: 'Small',
      // desc: 'For most UI controls and labels',
      meta: [
        'font-size: 1.2rem (12px)',
        'font-weight: 540'
      ],
      sample: 'UI controls and labels, like buttons and menu items'
    },
    {
      name: 'Tiny',
      // desc: 'Things should be there, but "not there"',
      meta: [
        'font-size: 1rem (10px)',
        'font-weight: 600'
      ],
      sample: '<p>Made in the USA</p>'
    },
  ])
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <ep-container
    :style="{
      '--ep-container-padding': '0',
      '--ep-container-content-padding': '0',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-border-width': '0.1rem',
      '--ep-container-overflow': 'auto'
    }"
    sticky-header
    calculate-height
    :calculate-height-offset="30"
  >
    <template #header>
      <ep-header
        style="--ep-header-container-padding: 0 3rem; --ep-header-container-bg-color: transparent;"
      >
        <template #left>
          <ep-tabs
            :items="tabs"
            :active-tab-index="activeTab"
            @tab-click="setActiveTab"
          />
        </template>
      </ep-header>
    </template>
    <template #default>
      <ep-tab-content
        :items="tabs"
        :active-tab-index="activeTab"
      >
        <template #tab-0>
          <div class="type-styles-container">
            <div
              v-for="(typeStyle, index) in typeScale"
              :key="index"
              class="type-style"
            >
              <div class="type-style__desc">
                <div class="font-size--body text-color--loud">
                  {{ typeStyle.name }}
                </div>
                <template
                  v-for="(item, indexx) in typeStyle.meta"
                  :key="indexx"
                >
                  <div class="meta font-size--small">
                    {{ item }}
                  </div>
                </template>
              </div>
              <div class="type-style__sample">
                <div
                  :class="`font-size--${typeStyle.name.toLowerCase()}`"
                  v-html="typeStyle.sample"
                />
              </div>
              <div class="monospace">
                Fira Code info coming soon
              </div>
            </div>
          </div>
        </template>
        <template #tab-1>
          <ep-flex>
            <div class="dark-theme">
              <ep-flex class="flex-col">
                <text-color-item
                  v-for="color in textColors"
                  :key="color.variant"
                  :variant="color.variant"
                  :description="color.description"
                />
              </ep-flex>
            </div>
            <div class="light-theme">
              <ep-flex class="flex-col">
                <text-color-item
                  v-for="color in textColors"
                  :key="color.variant"
                  :variant="color.variant"
                  :description="color.description"
                />
              </ep-flex>
            </div>
          </ep-flex>
        </template>
      </ep-tab-content>
    </template>
  </ep-container>
</template>

<style lang="scss" scoped>
  .ep-container + .ep-container {
    margin-top: 10px;
  }

  .ep-tab-content {
    height: 100%;

    & > .ep-tab-content__tab-item .ep-flex {
      height: 100%;
    }
  }

  .type-styles-container {
    padding: 3rem;
  }

  .dark-theme,
  .light-theme {
    flex: 1;
    height: 100%;
    background-color: var(--interface-surface);
    padding: 3rem;
  }

  .dark-theme {
    --text-color--danger: hsl(0 100% 76% / 1);
    --text-color--warning: hsl(38 79% 60% / 1);
    --text-color--success: hsl(122 39% 57% / 1);
  }

  .light-theme {
    --text-color--danger: hsl(0 100% 43% / 1);
    --text-color--warning: hsl(33 100% 32% / 1);
    --text-color--success: hsl(142 72% 28% / 1)
  }

  .type-style {
    display: flex;
    align-items: center;
    padding: 2.6rem 0 3rem;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &__desc {
      flex: 2;

      * + * {
        margin-top: 0.5rem;
      }

      .meta {
        color: var(--text-color--subtle);
      }
    }

    &__sample {
      flex: 6;
    }

    & + & {
      border-top: 1px solid var(--border-color);
    }
  }
</style>
