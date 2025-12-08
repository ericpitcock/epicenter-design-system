<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      :size="size"
      :disabled="item.disabled"
      :class="{ [`${activeClass} ep-button-group--selected`]: index === activeButton && !item.disabled }"
      @click="onClick(item, index)"
    >
      {{ item.label }}
    </ep-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpButtonGroup'
  })

  const props = defineProps({
    /**
     * An array of button items with label and optional disabled properties.
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * The index of the initially active button.
     */
    active: {
      type: Number,
      default: null
    },
    /**
     * The CSS class to apply to the active button.
     */
    activeClass: {
      type: String,
      default: ''
    },
    /**
     * The size of the buttons in the group.
     */
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['click'])

  const activeButton = ref(props.active)

  const onClick = (item, index) => {
    if (item.disabled) return

    activeButton.value = index
    emit('click', { item, index })
  }
</script>