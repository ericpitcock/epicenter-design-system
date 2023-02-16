<template>
  <div :class="['ep-badge', { 'ep-badge--uppercase': uppercase }]">
    {{ label }}
  </div>
</template>

<script>
  export default {
    name: 'EpBadge',
    props: {
      label: {
        type: String,
        default: 'Badge'
      },
      backgroundColor: {
        type: String,
        default: 'var(--background-4)'
      },
      borderColor: {
        type: String,
        default: 'var(--border-color--lighter)'
      },
      textColor: {
        type: String,
        default: 'var(--text-color)'
      },
      uppercase: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: var(--border-radius);
    border: 1px solid v-bind(borderColor);
    background-color: v-bind(backgroundColor);
    color: v-bind(textColor);
    font-size: var(--font-size--tiny);
    font-variation-settings: 'wght' 600;
    user-select: none;
    &--uppercase {
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
</style>