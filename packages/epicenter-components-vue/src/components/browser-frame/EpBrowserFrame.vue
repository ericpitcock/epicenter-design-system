<script setup lang="ts">
  import UserCircle02 from '@ericpitcock/epicenter-icons-vue/UserCircle02'

  import EpHeader from '../header/EpHeader.vue'

  interface Props {
    imageAlt?: string
    imageSrc?: string
    url?: string
    width?: string
  }

  const {
    imageAlt = '',
    imageSrc = '',
    url = 'http://website.com',
    width = '100%',
  } = defineProps<Props>()

  defineOptions({ name: 'EpBrowserFrame' })

</script>

<template>
  <div
    class="browser-frame"
    :style="{ width: `${width}` }"
  >
    <ep-header>
      <template #left>
        <div class="window-buttons">
          <div class="window-button window-button--close" />
          <div class="window-button window-button--minimize" />
          <div class="window-button window-button--maximize" />
        </div>
      </template>
      <template #center>
        <div class="search">
          {{ url }}
        </div>
      </template>
      <template #right>
        <UserCircle02 />
      </template>
    </ep-header>
    <div class="image-container">
      <img
        :src="imageSrc"
        :alt="imageAlt"
      >
    </div>
  </div>
</template>

