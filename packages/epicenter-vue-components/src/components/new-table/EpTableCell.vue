<template>
  <!-- <td>
    {{ row[column.key] }}
  </td> -->
  <td>
    <component
      :is="column.component"
      v-if="column.component"
      v-bind="row[column.key].props"
    />
    <template v-else>
      {{ row[column.key] }}
    </template>
  </td>
</template>

<script setup>
  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    row: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  })
</script>