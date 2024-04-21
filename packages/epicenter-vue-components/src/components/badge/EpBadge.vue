<template>
  <div
    class="ep-badge"
    :style="styles"
  >
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
      styles: {
        type: Object,
        default: () => ({})
      },
    },
  }
</script>
