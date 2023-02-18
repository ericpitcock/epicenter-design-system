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
