<script setup>
  defineProps({
    variant: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div
    class="text-color-item"
    :class="[`text-color--${variant}`, variant === 'inverse' ? 'interface-surface--inverse' : '']"
  >
    <div
      class="text-color-item__name"
      :class="[variant === 'inverse' ? 'text-color----inverse' : 'text-color--default']"
    >
      --text-color--{{ variant }}
    </div>
    <div
      class="text-color-item__description"
      :class="[`text-color--${variant}`, variant === 'inverse' ? 'interface-surface--inverse' : '']"
    >
      {{ description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .text-color-item {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);

    &.interface-surface--inverse {
      transform: translateX(-30px);
      width: calc(100% + 6rem);
      padding-left: 3rem !important;
    }

    &:last-child {
      border-bottom: 1px solid var(--border-color);
    }

    &__name {
      flex: 0 0 20rem;
    }

    &__description {
      flex: 1;
    }

    &:has(.interface-surface--inverse) {
      padding: 0;

      .interface-surface--inverse {
        padding: 2rem 1rem;
      }
    }
  }
</style>
