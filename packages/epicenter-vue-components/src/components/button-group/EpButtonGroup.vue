<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      :label="item.label"
      :size="size"
      :disabled="disabled"
      :class="{ 'ep-button-group--active': index === activeButton && !disabled }"
      :style="styles"
      @click="onClick(item, index)"
    />
  </div>
</template>

<script setup>
  import EpButton from '../button/EpButton.vue'
  import { ref } from 'vue'

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
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['click'])

  const activeButton = ref(props.active)

  const onClick = (item, index) => {
    if (props.disabled) {
      return
    }
    activeButton.value = index
    emit('click', item)
  }
</script>