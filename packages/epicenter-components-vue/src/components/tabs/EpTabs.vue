<script setup lang="ts">
  import { computed, useTemplateRef } from 'vue'

  interface TabItem {
    exact?: boolean
    label: string
    to?: string
  }

  interface Props {
    activeTabIndex?: number
    items?: (string | TabItem)[]
    variant?: string
  }

  const { activeTabIndex = 0, items = [], variant = 'default' } = defineProps<Props>()

  const emit = defineEmits<{
    'tab-click': [payload: { item: TabItem; index: number } | number]
  }>()

  defineOptions({ name: 'EpTabs' })

  const tabs = computed((): TabItem[] => {
    return items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = ({ item, index }: { item: TabItem; index: number }): void => {
    if (!item.to) {
      emit('tab-click', { item, index })
    }
  }

  const onTabKeydown = (index: number, event: KeyboardEvent): void => {
    const keyActions: Record<string, () => void> = {
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

  const tabList = useTemplateRef<HTMLDivElement>('tabList')

  const focusTab = (index: number): void => {
    const tabElements = tabList.value?.querySelectorAll('[role="tab"]') || []
      ; (tabElements[index] as HTMLElement)?.focus()
  }
</script>

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
        { 'ep-tabs__tab-item--active': !item.to && index === activeTabIndex }
      ]"
      :to="item.to ? item.to : undefined"
      :exact="item.to ? item.exact : undefined"
      role="tab"
      :aria-selected="index === activeTabIndex"
      :tabindex="index === activeTabIndex ? 0 : -1"
      @click="onClick({ item, index })"
      @keydown="onTabKeydown(index, $event)"
    >
      <span>{{ item.label }}</span>
    </component>
  </div>
</template>