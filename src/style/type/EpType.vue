<template>
  <ep-container padding="30px">
    <p class="font-size--large">Inter Variable</p>
  </ep-container>
  <ep-container padding="30px">
    <div class="type-style" v-for="(typeStyle, index) in typeStyles" :key="index">
      <div class="type-style__desc">
        <div class="font-size--body">{{ typeStyle.name }}</div>
        <template v-for="item in typeStyle.meta">
          <div class="meta font-size--small">{{ item }}</div>
        </template> 
        <!-- <div class="meta font-size--small">{{ typeStyle.size }}</div>
        <div class="meta font-size--small">{{ typeStyle.weight }}</div> -->
      </div>
      <div class="type-style__sample">
        <div
          :class="`font-size--${typeStyle.name.toLowerCase()}`"
          v-html="typeStyle.sample"
        >
        </div>
      </div>
    </div>
  </ep-container>
</template>

<script>
  import faker from 'faker'

  import EpContainer from '@/components/container/EpContainer'
  import EpDivider from '@/components/divider/EpDivider'

  export default {
    components: {
      EpContainer,
      EpDivider
    },
    data() {
      return {
        typeStyles: [
          {
            name: 'Jumbo',
            desc: 'Page headers',
            meta: [
              'font-size: 2.6rem (26px)',
              'font-weight: 300 (light)'
            ],
            sample: '<h1>Download the internet</h1>'
          },
          {
            name: 'Large',
            desc: 'headers',
            meta: [
              'font-size: 2rem (20px)',
              'font-weight: 400 (regular)'
            ],
            sample: '<h2>Large</h2>'
          },
          {
            name: 'Body',
            desc: 'Blocks of text you expect people to read',
            meta: [
              'font-size: 1.5rem (15px)',
              'line-height: 1.6em',
              'font-weight: 400 (regular)',
              'max-width: 60rem'
            ],
            sample: `<div class="copy-block"><p>Use me for larger copy blocks to provide a nice, comfortable reading experience. ${faker.lorem.sentences(6)}</p></div>`
          },
          {
            name: 'Default',
            desc: 'UI controls and labels',
            meta: [
              'font-size: 1.3rem (13px)',
              'font-weight: 400 (regular)'
            ],
            sample: 'For buttons and most UI controls and elements'
          },
          {
            name: 'Small',
            desc: 'UI controls and labels, only smaller',
            meta: [
              'font-size: 1.2rem (12px)',
              'font-weight: 400 (regular)'
            ],
            sample: 'UI controls and labels, only smaller'
          },
          {
            name: 'Tiny',
            desc: 'Things should be there, but "not there"',
            meta: [
              'font-size: 1rem (10px)',
              'font-weight: 400 (regular)'
            ],
            sample: '<p>Made in the USA</p>'
          },
        ]
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
  }
</style>