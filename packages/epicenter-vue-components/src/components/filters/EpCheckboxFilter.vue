<template>
  <div :class="['ep-checkbox-filter', classes]">
    <ep-checkbox
      v-if="allOption"
      v-bind="allOption"
      @change="onAllChange($event)"
    />
    <ep-checkbox
      v-for="item in items"
      :key="item.value"
      v-bind="item"
      @change="onChange($event)"
    />
    {{ checked }}
  </div>
</template>

<script>
  import EpCheckbox from '../checkbox/EpCheckbox.vue'

  export default {
    name: 'EpCheckboxFilter',
    components: {
      EpCheckbox
    },
    props: {
      allOption: {
        type: Object,
        default: () => null
      },
      items: {
        type: Array,
        default: () => []
      },
      orientation: {
        type: String,
        default: 'vertical'
      }
    },
    data() {
      return {
        checked: this.items.map(item => item.value)
      }
    },
    methods: {
      onAllChange(event) {
        const { checked } = event.target
        if (checked) {
          this.checked = this.items.map(item => item.value)
        } else {
          this.checked = []
        }
        this.$emit('change', this.checked)
      },
      onChange(event) {
        const { value, checked } = event.target
        if (checked) {
          this.checked.push(value)
        } else {
          this.checked = this.checked.filter(item => item !== value)
        }
        this.$emit('change', this.checked)
      }
    },
    computed: {
      classes() {
        return {
          'ep-checkbox-filter--horizontal': this.orientation === 'horizontal'
        }
      }
    }
  }
</script>