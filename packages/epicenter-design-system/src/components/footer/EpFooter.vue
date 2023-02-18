<template>
  <footer class="ep-footer">
    <slot />
  </footer>
</template>

<script>
  export default {
    name: 'EpFooter',
    props: {
      // display: {
      //   type: String,
      //   default: 'block'
      // },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '5.1rem'
      },
      padding: {
        type: String,
        default: '0'
      },
      margin: {
        type: String,
        default: '0'
      },
      backgroundColor: {
        type: String,
        default: 'var(--background-2)'
      },
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
      },
      borderWidth: {
        type: String,
        default: '0.1rem'
      },
      borderStyle: {
        type: String,
        default: 'solid'
      },
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      }
    }
  }
</script>
