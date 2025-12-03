<template>
  <div class="color-chips">
    <div
      v-for="name in colors"
      :key="name"
      class="color-chip"
      :style="{ backgroundColor: `var(${name})` }"
      :data-color-name="name"
    >
      <ep-tooltip>
        <template #tooltip>
          <span v-if="copiedCell !== name">Copy</span>
          <span v-else>Copied!</span>
        </template>
        <p
          class="name"
          @click="copyToClipboard(name)"
        >
          {{ sanitizeColorName(name) }}
        </p>
      </ep-tooltip>
    </div>
  </div>
</template>

<script setup>
  import { useClipboard } from '@vueuse/core'
  import { ref } from 'vue'

  import EpTooltip from '@/components/tooltip/EpTooltip.vue'

  const props = defineProps({
    colors: {
      type: Object,
      required: true,
    },
  })

  const sanitizeColorName = (name) => {
    return name.replace('--primary-color-', '')
  }

  const source = ref('')
  const { copy } = useClipboard({ source })
  const copiedCell = ref(null)

  const copyToClipboard = async (name) => {
    await copy(name)
    copiedCell.value = name
    setTimeout(() => {
      copiedCell.value = null
    }, 2000)
  }
</script>

<style lang="scss" scoped>
  .color-chips {
    flex: 1;
    display: flex;
    gap: 0.5rem;
  }

  .color-chip {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover {
      .name {
        display: flex;
        color: white;
        text-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.5);
      }
    }
  }

  .name {
    display: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>