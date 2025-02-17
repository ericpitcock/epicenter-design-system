<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      :label="item.label"
      :size="size"
      :disabled="item.disabled"
      :class="{ [`${activeClass} ep-button-group--active`]: index === activeButton && !disabled }"
      :style="styles"
      @click="onClick(item, index)"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpButtonGroup'
  })

  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: null
    },
    activeClass: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['click'])

  const activeButton = ref(props.active)

  const onClick = (item, index) => {
    if (props.disabled) return

    activeButton.value = index
    emit('click', item)
  }
</script>