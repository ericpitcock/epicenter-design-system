<template>
  <div :class="['ep-checkbox-filter', classes]">
    <ep-checkbox
      v-if="allOption"
      v-bind="allOption"
      :checked="checked.length === items.length"
      @change="handleSelectAll($event)"
    />
    <ep-checkbox
      v-for="item in items"
      :key="item.value"
      v-bind="item"
      :checked="checked.includes(item.id)"
      @change="handleChange($event)"
    />
    {{ checked }}
    {{ unchecked }}
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
    emits: ['selection-change'],
    data() {
      return {
        checked: this.items.map(item => item.value)
      }
    },
    methods: {
      handleChange(event) {
        const { value, checked } = event.target
        if (checked) {
          this.checked.push(value)
        } else {
          this.checked = this.checked.filter(item => item !== value)
        }
        this.$emit('selection-change', this.checked, this.unchecked)
      },
      handleSelectAll(event) {
        const { checked } = event.target
        if (checked) {
          this.checked = this.items.map(item => item.value)
        } else {
          this.checked = []
        }
        this.$emit('selection-change', this.checked, this.unchecked)
      }
    },
    computed: {
      classes() {
        return {
          'ep-checkbox-filter--horizontal': this.orientation === 'horizontal'
        }
      },
      unchecked() {
        // this.items.key that's not in this.checked
        return this.items
          .map(item => item.value)
          .filter(item => !this.checked.includes(item))
      }
    }
  }
</script>