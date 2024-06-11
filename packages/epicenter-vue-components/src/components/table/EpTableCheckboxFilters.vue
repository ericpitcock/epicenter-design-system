<template>
  <div class="ep-table-checkbox-filters">
    <ep-flex flex-props=",auto,column,,,,,3rem,">
      <ep-flex
        v-for="(filterSet, category) in filters"
        :key="category"
        flex-props=",auto,column,,,,,1rem,"
      >
        <h3 class="text-style--section">
          {{ category.replace(/_/g, ' ') }}
        </h3>
        <ep-checkbox
          v-for="checkbox in filterSet"
          :key="checkbox.label"
          v-bind="checkbox"
          v-model="checkbox.checked"
          @update:model-value="updateCheckbox(category, checkbox.label, $event)"
        />
      </ep-flex>
    </ep-flex>
  </div>
</template>

<script>
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpCheckbox from '../checkbox/EpCheckbox.vue'

  export default {
    name: 'EpTableCheckboxFilters',
    components: {
      EpFlex,
      EpCheckbox
    },
    props: {
      filters: {
        type: Object,
        required: true
      }
    },
    emits: ['update:filters'],
    methods: {
      updateCheckbox(category, label, checked) {
        this.$emit('update:filters', { category, label, checked })
      }
    }
  }
</script>
