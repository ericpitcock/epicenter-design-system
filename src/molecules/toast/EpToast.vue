<template>
  <teleport to="body">
  <div class="ep-toast">
    {{ message }}
  </div>
  </teleport>
</template>

<script>
  export default {
    name: 'EpToast',
    props: {
      message: {
        type: String,
        required: true
      },
      dissmissable: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-toast {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>