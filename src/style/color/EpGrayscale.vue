<template>
  <div class="colors">
    <ep-container
      width="fit-content"
      :connected="true"
      :padding="'30px 40px 40px'"
    >
      <div class="category">
        <div class="category__label">
          <h1 class="font-size--large">Ep Grayscale</h1>
        </div>
        <div class="category__swatches">
          <div v-for="(level, index) in levels" :key="index" class="swatch">
            <div
              class="swatch__chip"
              :style="{ background: `var(--gray-${level})` }"
            ></div>
            <div class="swatch__name">
              {{ `Gray ${level}` }}
            </div>
          </div>
        </div>
      </div>
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'EpColor',
    data() {
      return {
        levels: [
          '0',
          '10',
          '20',
          '30',
          '40',
          '50',
          '60',
          '70',
          '80',
          '90',
          '100',
          '110',
          '120',
          '130',
          '140',
          '150',
          '160',
          '170',
          '180',
          '190',
          '200',
          '210',
          '220',
          '230',
          '240',
          '250',
          '260',
          '270',
          '280',
          '290',
          '300',
          '310',
          '320',
          '330',
          '340',
          '350',
          '360',
          '370',
          '380',
          '390',
          '400',
          '410',
          '420',
          '430',
          '440',
          '450',
          '460',
          '470',
          '480',
          '490',
          '500'
        ]
      }
    },
    components: {
      EpContainer
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__label {
      // flex: 0 0 40px;
      h1 {
        text-transform: capitalize;
      }
    }
    &__swatches {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 20px 20px;
    }
  }
  .swatch {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    &__chip {
      width: 100px;
      height: 100px;
      border-radius: 3px;
    }
    &__name {
      text-transform: capitalize;
      font-size: 12px;
      padding-top: 10px;
    }
  }
</style>
