<template>
  <div :class="['ep-empty-state', classes]">
    <div class="ep-empty-state__img">
      <img v-if="image.src" :alt="image.alt" class="ep-empty-state__cover" :src="image.src" />
    </div>
    <div class="ep-empty-state__body">
      <h2 class="font-size--large" >{{ message }}</h2>
      <p v-if="subtext" class="text--subtle font-size--small">{{ subtext }}</p>
      <div v-if="$slots.cta" class="ep-empty-state__body__cta">
        <slot name="cta"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpEmptyState',
    props: {
      direction: {
        type: String,
        default: 'column'
      },
      image: {
        type: Object,
        default: () => ({})
      },
      message: {
        type: String,
        default: ''
      },
      subtext: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes() {
        return {
          'ep-empty-state--column': this.direction === 'column',
          'ep-empty-state--row': this.direction === 'row'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .ep-empty-state {
    display: flex;
    gap: 3rem;
    img {
      max-width: 10rem;
    }
    &--column {
      flex-direction: column;
      align-items: center;
      .ep-empty-state__body {
        text-align: center;
      }
    }
    &--row {
      flex-direction: row;
      align-items: center;
    }
    &__body {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>