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
      v-model="item.checked"
    />
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
    emits: ['filter-change'],
    data() {
      return {
        // checked: this.items.map(item => item.value)
      }
    },
    computed: {
      classes() {
        return {
          'ep-checkbox-filter--horizontal': this.orientation === 'horizontal'
        }
      },
      checked: {
        get() {
          return this.items
            .map(item => item.value)
            .filter(item => this.items.find(i => i.value === item).checked)
        },
        set(value) {
          this.items.forEach(item => {
            item.checked = value.includes(item.value)
          })
        }
      },
      unchecked() {
        return this.items
          .map(item => item.value)
          .filter(item => !this.checked.includes(item))
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
        this.$emit('filter-change', this.checked, this.unchecked)
      },
      handleSelectAll(event) {
        const { checked } = event.target
        if (checked) {
          this.checked = this.items.map(item => item.value)
        } else {
          this.checked = []
        }
        this.$emit('filter-change', this.checked, this.unchecked)
      }
    }
  }
</script>