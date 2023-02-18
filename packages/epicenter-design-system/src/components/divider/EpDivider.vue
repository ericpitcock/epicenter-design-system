<template>
  <hr class="ep-divider" />
</template>

<script>
  export default {
    name: 'EpDivider',
    props: {
      color: {
        type: String,
        default: 'var(--border-color)'
      },
      margin: {
        type: String,
        default: '0'
      }
    }
  }
</script>
