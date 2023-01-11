<template>
  <drag-it-dude
    @activated="handleActivated"
    @dragging="handleDragging"
    @dropped="handleDropped"
  >
    <div
      :class="['bounding-box', { 'bounding-box--selected': selected }]"
      v-click-outside="onClickOutside"
    >
      <e :outline="true" v-if="selected" />
      <e :outline="false" />
    </div>
  </drag-it-dude>
</template>

<script>
  import DragItDude from 'vue-drag-it-dude'
  import vClickOutside from 'v-click-outside'
  import E from './E'

  export default {
    name: 'ELogo',
    data: () => ({
      selected: false
    }),
    directives: {
      clickOutside: vClickOutside.directive
    },
    components: {
      DragItDude,
      E
    },
    methods: {
      handleActivated() {
        this.selected = true
        // console.log('handle activated')
      },
      handleDragging() {
        // console.log('handle dragging')
      },
      handleDropped() {
        // console.log('handle dropped')
      },
      onClickOutside() {
        this.selected = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  // parent element needs position: relative
  $blue: #4f80ff;

  .bounding-box {
    position: relative;
    border: 1px solid transparent;
    &--selected {
      border-color: $blue;
    }
  }
</style>
