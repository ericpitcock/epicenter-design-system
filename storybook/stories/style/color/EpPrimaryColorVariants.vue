<template>
  <div class="primary-color-variants">
    <div class="x-axis">
      <p>Tints / Shades</p>
    </div>
    <div class="y-axis">
      <p>Hue Shifts</p>
    </div>
    <div class="color-chips-container">
      <color-chips
        v-for="variant in variantKeys"
        :key="variant"
        :colors="variant"
        class="color-chips"
      />
    </div>
  </div>
</template>

<script setup>
  import ColorChips from './ColorChips.vue'

  const variantKeys = {
    up15: [
      '--primary-color-up-15-100',
      '--primary-color-up-15-200',
      '--primary-color-up-15-300',
      '--primary-color-up-15-400',
      '--primary-color-up-15-500',
      '--primary-color-up-15-base',
      '--primary-color-up-15-600',
      '--primary-color-up-15-700',
      '--primary-color-up-15-800',
      '--primary-color-up-15-900',
      '--primary-color-up-15-1000',
    ],
    up10: [
      '--primary-color-up-10-100',
      '--primary-color-up-10-200',
      '--primary-color-up-10-300',
      '--primary-color-up-10-400',
      '--primary-color-up-10-500',
      '--primary-color-up-10-base',
      '--primary-color-up-10-600',
      '--primary-color-up-10-700',
      '--primary-color-up-10-800',
      '--primary-color-up-10-900',
      '--primary-color-up-10-1000',
    ],
    up5: [
      '--primary-color-up-5-100',
      '--primary-color-up-5-200',
      '--primary-color-up-5-300',
      '--primary-color-up-5-400',
      '--primary-color-up-5-500',
      '--primary-color-up-5-base',
      '--primary-color-up-5-600',
      '--primary-color-up-5-700',
      '--primary-color-up-5-800',
      '--primary-color-up-5-900',
      '--primary-color-up-5-1000',
    ],
    base: [
      '--primary-color-100',
      '--primary-color-200',
      '--primary-color-300',
      '--primary-color-400',
      '--primary-color-500',
      '--primary-color-base',
      '--primary-color-600',
      '--primary-color-700',
      '--primary-color-800',
      '--primary-color-900',
      '--primary-color-1000',
    ],
    down5: [
      '--primary-color-down-5-100',
      '--primary-color-down-5-200',
      '--primary-color-down-5-300',
      '--primary-color-down-5-400',
      '--primary-color-down-5-500',
      '--primary-color-down-5-base',
      '--primary-color-down-5-600',
      '--primary-color-down-5-700',
      '--primary-color-down-5-800',
      '--primary-color-down-5-900',
      '--primary-color-down-5-1000',
    ],
    down10: [
      '--primary-color-down-10-100',
      '--primary-color-down-10-200',
      '--primary-color-down-10-300',
      '--primary-color-down-10-400',
      '--primary-color-down-10-500',
      '--primary-color-down-10-base',
      '--primary-color-down-10-600',
      '--primary-color-down-10-700',
      '--primary-color-down-10-800',
      '--primary-color-down-10-900',
      '--primary-color-down-10-1000',
    ],
    down15: [
      '--primary-color-down-15-100',
      '--primary-color-down-15-200',
      '--primary-color-down-15-300',
      '--primary-color-down-15-400',
      '--primary-color-down-15-500',
      '--primary-color-down-15-base',
      '--primary-color-down-15-600',
      '--primary-color-down-15-700',
      '--primary-color-down-15-800',
      '--primary-color-down-15-900',
      '--primary-color-down-15-1000',
    ],
  }
</script>

<style lang="scss" scoped>
  .primary-color-variants {
    display: grid;
    height: 100%;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px 1fr;

    .x-axis,
    .y-axis {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text-color--loud);
    }

    .x-axis {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .y-axis {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      transform: rotate(-90deg);
      white-space: nowrap;
    }

    .color-chips-container {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      z-index: 1;
    }
  }
</style>