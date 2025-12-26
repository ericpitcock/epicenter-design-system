<script setup>
  import { computed } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  const props = defineProps({
    data: {
      type: [Array, Object],
      required: true
    },
    commonKeyWidth: {
      type: Boolean,
      default: false
    },
    sectionHeaders: {
      type: Boolean,
      default: false
    },
  })

  const processedData = computed(() => {
    if (Array.isArray(props.data)) {
      return props.data
    }

    return [props.data]
  })

  const keyColumnWidth = computed(() => {
    if (!props.commonKeyWidth) {
      return 'auto'
    }

    let maxKeyLength = 0

    for (const section of processedData.value) {
      for (const key in section.data) {
        maxKeyLength = Math.max(maxKeyLength, key.length)
      }
    }

    return `${maxKeyLength}ch`
  })
</script>

<template>
  <ep-flex class="ep-key-value-table flex-col gap-10">
    <template
      v-for="section in processedData"
      :key="section.name"
    >
      <h3
        v-if="sectionHeaders"
        class="text-style--section"
      >
        {{ section.name }}
      </h3>
      <table>
        <tr
          v-for="(value, key) in section.data"
          :key="key"
        >
          <td
            class="text--subtle"
            :style="{ width: keyColumnWidth }"
          >
            {{ key }}
          </td>
          <td class="ep-flex gap-5">
            <slot
              name="value"
              v-bind="{ key, value }"
            >
              {{ value }}
            </slot>
          </td>
        </tr>
      </table>
    </template>
  </ep-flex>
</template>
