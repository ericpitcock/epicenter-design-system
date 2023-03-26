<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      v-bind="item"
      :class="{ 'ep-button-group--active': index === activeButton }"
      @click="onClick(item, index)"
    />
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'

  export default {
    name: 'EpButtonGroup',
    components: {
      EpButton
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      active: {
        type: Number,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      }
    },
    emits: ['click'],
    data() {
      return {
        activeButton: 0
      }
    },
    methods: {
      onClick(item, index) {
        if (this.disabled) {
          return
        }
        this.activeButton = index
        this.$emit('click', item)
      }
    }
  }
</script>