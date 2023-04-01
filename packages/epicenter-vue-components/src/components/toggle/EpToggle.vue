<template>
  <div
    :class="['toggle', classes]"
    @click="toggle"
  >
    <div class="toggle__track">
      <div class="toggle__thumb" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpToggle',
    props: {
      isActive: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['toggle'],
    data() {
      return {
        active: this.isActive,
      }
    },
    computed: {
      classes() {
        return {
          'toggle--active': this.active,
          'toggle--disabled': this.disabled,
        }
      },
    },
    methods: {
      toggle() {
        this.active = !this.active
        this.$emit('toggle', this.active)
      },
    },
  }
</script>
