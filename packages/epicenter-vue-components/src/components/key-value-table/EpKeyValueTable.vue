<!-- eslint-disable vue/no-v-html -->
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
          <td :class="{ 'ep-flex gap-5': showActionsMenu }">
            {{ value }}
            <template v-if="showActionsMenu">
              <slot
                name="actions-menu"
                v-bind="{ key, value }"
              />
            </template>
          </td>
        </tr>
      </table>
    </template>
  </ep-flex>
</template>

<script setup>
  import { computed, onMounted } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  defineOptions({
    name: 'EpKeyValueTable'
  })

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
    showActionsMenu: {
      type: Boolean,
      default: false
    }
  })

  const processedData = computed(() => {
    if (Array.isArray(props.data)) {
      return props.data
    }

    return [props.data]
  })

  // const formattedData = computed(() => {
  //   if (!props.data.formatter) {
  //     return props.data.data
  //   }
  //   const formatted = {}
  //   for (const [key, value] of Object.entries(props.data.data)) {
  //     formatted[key] = {}
  //     for (const [prop, val] of Object.entries(value)) {
  //       if (props.data.formatter[prop]) {
  //         formatted[key][prop] = props.data.formatter[prop](val)
  //       } else {
  //         formatted[key][prop] = val
  //       }
  //     }
  //   }

  //   return formatted
  // })

  onMounted(() => {
    console.log(props.data)
  })

  const keyColumnWidth = computed(() => {
    if (!props.commonKeyWidth) {
      return 'auto'
    }

    const data = props.data
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
