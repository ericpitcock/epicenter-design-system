<template>
  <div :class="['ep-tabs', { 'ep-tabs--classic': variant === 'classic' }]">
    <component
      :is="item.to ? 'router-link' : 'div'"
      v-for="(item, index) in tabs"
      :key="index"
      :class="[
        'ep-tabs__tab-item',
        { 'ep-tabs__tab-item--active': index === activeTabIndex }
      ]"
      :to="item.to ? item.to : undefined"
      @click="onClick(index)"
    >
      <span>{{ item.label }}</span>
    </component>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTabs'
  })

  import { computed } from 'vue'

  const props = defineProps({
    activeTabIndex: {
      type: Number,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    variant: {
      type: String,
      default: 'default' // default, classic
    }
  })

  const emit = defineEmits(['tab-click'])

  const tabs = computed(() => {
    return props.items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = (index) => {
    emit('tab-click', index)
  }
</script>
