<template>
  <div class="ep-badge">
    Badge
  </div>
</template>

<script>
  export default {
    name: 'EpBadge',
    props: {
      text: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      shape: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
      iconColor: {
        type: String,
        default: '',
      },
      iconSize: {
        type: String,
        default: '',
      },
      iconShape: {
        type: String,
        default: '',
      },
      iconPosition: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: var(--font-size--tiny);
    font-variation-settings: 'wght' 600;
    user-select: none;
    &--uppercase {
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
</style>