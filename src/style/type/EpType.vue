<template>
  <ep-container padding="30px">
    <p class="font-size--large">Inter Variable</p>
  </ep-container>
  <ep-container padding="30px">
    <div class="type-style" v-for="(typeStyle, index) in typeStyles" :key="index">
      <div class="type-style__desc">
        <div class="font-size--body">{{ typeStyle.name }}</div>
        <div class="meta font-size--small">{{ typeStyle.size }}</div>
        <div class="meta font-size--small">{{ typeStyle.weight }}</div>
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
            size: '2.6rem (26px)',
            weight: '300 (light)',
            sample: '<h1>Download the internet</h1>'
          },
          {
            name: 'Large',
            desc: 'Section/component headers',
            size: '1.8rem (18px)',
            weight: '400 (regular)',
            sample: '<h2>Large</h2>'
          },
          {
            name: 'Body',
            desc: 'Blocks of text you expect people to read',
            size: '1.4rem (14px)',
            weight: '400 (regular)',
            sample: `<p class="read-me">${faker.lorem.sentences(10)}</p>`
          },
          {
            name: 'Default',
            desc: 'UI controls and labels',
            size: '1.2rem (12px)',
            weight: '400 (regular)',
            sample: faker.lorem.word()
          },
          {
            name: 'Small',
            desc: 'UI controls and labels, only smaller',
            size: '1rem (10px)',
            weight: '400 (regular)',
            sample: faker.lorem.word()
          },
          {
            name: 'Tiny',
            desc: 'Things should be there, but "not there"',
            size: '0.8rem (8px)',
            weight: '400 (regular)',
            sample: '<p>Made in China</p>'
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
      flex: 1;
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