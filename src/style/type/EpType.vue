<template>
  <ep-container padding="30px">
    <p class="font-size--large">Inter Variable</p>
  </ep-container>
  <ep-container padding="30px">
    <div class="type-style" v-for="(typeStyle, index) in typeStyles" :key="index">
      <div class="type-style__desc">
        <div class="type-style__name font-size--large">{{ typeStyle.name }}</div>
        <!-- <div>{{ typeStyle.desc }}</div> -->
        <div>{{ typeStyle.size }}</div>
        <div>{{ typeStyle.weight }}</div>
      </div>
      <div class="type-style__sample">
        <div :class="['type-style__name', `font-size--${typeStyle.name.toLowerCase()}`]">
          <p>{{ typeStyle.sample }}</p>
        </div>
      </div>
      <!-- <div class="type-style__size">{{ typeStyle.size }}</div>
      <div class="type-style__weight">{{ typeStyle.weight }}</div> -->
    </div>
    
    <!-- <p class="special font-size--body">{{ faker.lorem.paragraph(4) }}</p> -->
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
        // faker,
        typeStyles: [
          {
            name: 'Jumbo',
            desc: 'Page headers',
            size: '2.6rem (26px)',
            weight: '300 (light)',
            sample: faker.random.word()
          },
          {
            name: 'Large',
            desc: 'Section/component headers',
            size: '1.8rem (18px)',
            weight: '400 (regular)',
            sample: faker.random.word()
          },
          {
            name: 'Body',
            desc: 'Blocks of text you expect people to read',
            size: '1.4rem (14px)',
            weight: '400 (regular)',
            sample: faker.lorem.sentences(10)
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
            sample: faker.lorem.word()
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
    padding: 30px 0;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
    &__desc {
      flex: 1;
    }
    &__sample {
      flex: 3;
    }
    &__size {
      flex: 1;
    }
    &__weight {
      flex: 1;
    }
    & + & {
      // margin-top: 30px;
      border-top: 1px solid var(--border-color);
    }
  }
</style>