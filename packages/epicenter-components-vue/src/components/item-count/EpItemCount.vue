<script setup lang="ts">
  interface EpItemCountProps {
    /** The count of items to display. */
    count: number
    /** The plural form of the item name. */
    plural: string
    /** The singular form of the item name. */
    singular: string
  }

  const props = defineProps<EpItemCountProps>()
</script>

<template>
  <span>
    {{ count }} {{ count === 1 ? singular : plural }}
  </span>
</template>