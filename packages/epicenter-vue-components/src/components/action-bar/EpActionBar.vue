<template>
  <div class="ep-action-bar">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <component
        :is="componentMap[item.component]"
        v-bind="item.props"
        @click="onClick"
      />
    </template>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue'

  const componentMap = {
    'ep-button': defineAsyncComponent(() => import('../button/EpButton.vue')),
    'ep-dropdown': defineAsyncComponent(() => import('../dropdown/EpDropdown.vue')),
  }

  const props = defineProps({
    /**
     * The items to display in the action bar.
     */
    items: {
      type: Array,
      required: true,
    },
  })

  const emit = defineEmits([
    /**
     * Emitted when an item is clicked.
     * @payload {Object} item - The clicked item.
     */
    'click'
  ])

  const onClick = (item) => {
    emit('click', item)
  }
</script>
