<!-- eslint-disable vue/no-v-html -->
<template>
  <ep-flex class="ep-key-value-table flex-col gap-10">
    <template
      v-for="(rows, section) in formattedData"
      :key="section"
    >
      <h3
        v-if="sectionHeaders"
        class="text-style--section"
      >
        {{ section }}
      </h3>
      <table>
        <tr
          v-for="(value, key) in rows"
          :key="key"
        >
          <td
            class="text--subtle"
            :style="{ width: keyColumnWidth }"
          >
            {{ key }}
          </td>
          <td :class="{ 'ep-flex gap-5': showActionsMenu }">
            {{ value }}
            <template v-if="showActionsMenu">
              <slot
                name="actions-menu"
                v-bind="{ value, key }"
              />
            </template>
          </td>
        </tr>
      </table>
    </template>
  </ep-flex>
</template>

<script setup>
  import { computed } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  defineOptions({
    name: 'EpKeyValueTable'
  })

  const props = defineProps({
    data: {
      type: Object,
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
    showActionsMenu: {
      type: Boolean,
      default: false
    }
  })

  const formattedData = computed(() => {
    if (!props.data.formatter) {
      return props.data.data
    }
    const formatted = {}
    for (const [key, value] of Object.entries(props.data.data)) {
      formatted[key] = {}
      for (const [prop, val] of Object.entries(value)) {
        if (props.data.formatter[prop]) {
          formatted[key][prop] = props.data.formatter[prop](val)
        } else {
          formatted[key][prop] = val
        }
      }
    }
    return formatted
  })

  const keyColumnWidth = computed(() => {
    if (!props.commonKeyWidth) {
      return 'auto'
    }

    const data = formattedData.value
    let maxKeyLength = 0

    for (let key of Object.keys(data)) {
      for (let subKey in data[key]) {
        if (subKey.length > maxKeyLength) {
          maxKeyLength = subKey.length
        }
      }
    }

    return `${maxKeyLength}ch`
  })
</script>
