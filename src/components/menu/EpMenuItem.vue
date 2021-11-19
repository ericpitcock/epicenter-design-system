<template>
  <div class="ep-menu-item">
    {{ item.label }}
    {{ item.icon }}
  </div>
</template>

<script>
  export default {
    name: 'EpMenuItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      itemClick(item) {
        // this.$parent.itemClick(item)
        // this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped></style>
