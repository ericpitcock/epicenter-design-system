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

  // Computed property to handle both simple array of strings and array of objects
  const tabs = computed(() => {
    return props.items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  // Method to emit tab-click event
  const onClick = (index) => {
    emit('tab-click', index)
  }
</script>

<!-- <script>
  export default {
    name: 'EpTabs',
    props: {
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
    },
    emits: ['tab-click'],
    computed: {
      // items will support a simple array of strings or an array of objects with a label property
      // need to handle both. If it's an array of objects, we'll map over the array and return the label property
      tabs() {
        return this.items.map(item => (typeof item === 'object' ? item : { label: item }))
      },
    },
    methods: {
      onClick(index) {
        this.$emit('tab-click', index)
      }
    },
  }
</script> -->
