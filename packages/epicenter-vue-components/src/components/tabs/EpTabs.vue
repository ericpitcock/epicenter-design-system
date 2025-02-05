<template>
  <div
    ref="tabList"
    class="ep-tabs"
    :class="{ 'ep-tabs--classic': variant === 'classic' }"
    role="tablist"
  >
    <component
      :is="item.to ? 'router-link' : 'button'"
      v-for="(item, index) in tabs"
      :id="`tab-${index}`"
      :key="index"
      :aria-controls="`tabpanel-${index}`"
      :class="[
        'ep-tabs__tab-item',
        { 'ep-tabs__tab-item--active': index === activeTabIndex }
      ]"
      :to="item.to ? item.to : undefined"
      role="tab"
      :aria-selected="index === activeTabIndex"
      :tabindex="index === activeTabIndex ? 0 : -1"
      @click="onClick(index)"
      @keydown="handleKeydown(index, $event)"
    >
      <span>{{ item.label }}</span>
    </component>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTabs'
  })

  import { computed, ref } from 'vue'

  const props = defineProps({
    /**
     * The index of the active tab.
     */
    activeTabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The tabs to display.
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * The variant of the tabs, default or classic.
     */
    variant: {
      type: String,
      default: 'default'
    }
  })

  const emit = defineEmits([
    /**
     * Emitted when a tab is clicked.
     */
    'tab-click'
  ])

  const tabs = computed(() => {
    return props.items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = (index) => {
    emit('tab-click', index)
  }

  const handleKeydown = (index, event) => {
    const keyActions = {
      ArrowRight: () => focusTab((index + 1) % tabs.value.length),
      ArrowLeft: () => focusTab((index - 1 + tabs.value.length) % tabs.value.length),
      Home: () => focusTab(0),
      End: () => focusTab(tabs.value.length - 1),
      Enter: () => emit('tab-click', index),
      ' ': () => emit('tab-click', index),
    }

    if (keyActions[event.key]) {
      keyActions[event.key]()
    }
  }

  const tabList = ref(null)

  const focusTab = (index) => {
    // Programmatically move focus to the new tab
    // const tabElements = document.querySelectorAll('[role="tab"]')
    // tabElements[index]?.focus()

    // Query only within this component's tab list
    const tabElements = tabList.value?.querySelectorAll('[role="tab"]') || []
    tabElements[index]?.focus()
  }
</script>