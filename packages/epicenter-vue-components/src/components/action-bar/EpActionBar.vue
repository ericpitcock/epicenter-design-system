<template>
  <div
    class="ep-action-bar"
    :style="styles"
  >
    <template v-for="(item, index) in items">
      <ep-button
        v-if="item.type === 'button'"
        :key="`button-${index}`"
        v-bind="buttonDefaults"
        :icon-left="item.iconLeft"
        @click="onClick(item, index)"
      />
      <ep-dropdown
        v-else-if="item.type === 'dropdown'"
        :key="`dropdown-${index}`"
        v-bind="item"
        :show-on-hover="showDropdownOnHover"
        @select="onClick"
      />
    </template>
  </div>
</template>

<script setup>
  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import { computed } from 'vue'

  defineOptions({
    name: 'EpActionBar'
  })

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    showDropdownOnHover: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['click'])

  const buttonDefaults = computed(() => {
    return {
      label: '',
      title: '',
    }
  })

  const onClick = (item) => {
    emit('click', item)
  }
</script>
