<template>
  <ep-container
    max-width="120rem"
    container-padding="0 3rem"
    content-padding="3rem 0"
    overflow="hidden"
  >
    <template #header>
      <ep-header>
        <template #left>
          <ep-tabs
            :items="tabs"
            @tab-click="handleClick"
          />
        </template>
        <template #right>
          <ep-button
            label="Google Fonts"
            href="https://fonts.google.com/specimen/Inter"
          />
        </template>
      </ep-header>
    </template>
    <template #default>
      <ep-tab-content
        :items="tabs"
        :active-tab="activeTab"
      >
        <template #tab-0>
          <div
            class="type-style"
            v-for="(typeStyle, index) in typeStyles"
            :key="index"
          >
            <div class="type-style__desc">
              <div class="font-size--body">{{ typeStyle.name }}</div>
              <template v-for="item in typeStyle.meta">
                <div class="meta font-size--small">{{ item }}</div>
              </template>
            </div>
            <div class="type-style__sample">
              <div
                :class="`font-size--${typeStyle.name.toLowerCase()}`"
                v-html="typeStyle.sample"
              >
              </div>
            </div>
          </div>
        </template>
        <template #tab-1>
          <div>
            Fira Code info coming soon
          </div>
        </template>
      </ep-tab-content>
    </template>
  </ep-container>
</template>

<script>
  import faker from 'faker'

  import EpButton from '@/components/button/EpButton'
  import EpContainer from '@/components/container/EpContainer'
  import EpDivider from '@/components/divider/EpDivider'
  import EpHeader from '@/components/header/EpHeader'
  import EpTabs from '@/components/tabs/EpTabs'
  import EpTabContent from '@/components/tabs/EpTabContent'

  export default {
    components: {
      EpButton,
      EpContainer,
      EpDivider,
      EpHeader,
      EpTabs,
      EpTabContent
    },
    data() {
      return {
        activeTab: 0,
        tabs: ['Inter Variable', 'Fira Code Variable'],
        typeStyles: [
          {
            name: 'Jumbo',
            desc: 'Page headers',
            meta: [
              'font-size: 2.6rem (26px)',
              'font-weight: 300'
            ],
            sample: '<h1>Download the internet</h1>'
          },
          {
            name: 'Large',
            desc: 'headers',
            meta: [
              'font-size: 2rem (20px)',
              'font-weight: 300'
            ],
            sample: '<h2>Large</h2>'
          },
          {
            name: 'Body',
            desc: 'Blocks of text you expect people to read',
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
            desc: 'UI controls and labels',
            meta: [
              'font-size: 1.3rem (13px)',
              'font-weight: 500'
            ],
            sample: 'For buttons and most UI controls and elements'
          },
          {
            name: 'Small',
            desc: 'UI controls and labels, only smaller',
            meta: [
              'font-size: 1.2rem (12px)',
              'font-weight: 540'
            ],
            sample: 'UI controls and labels, only smaller'
          },
          {
            name: 'Tiny',
            desc: 'Things should be there, but "not there"',
            meta: [
              'font-size: 1rem (10px)',
              'font-weight: 600'
            ],
            sample: '<p>Made in the USA</p>'
          },
        ]
      }
    },
    methods: {
      handleClick(index) {
        console.log('handleClick', index)
        this.activeTab = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-container + .ep-container {
    margin-top: 10px;
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
}</style>