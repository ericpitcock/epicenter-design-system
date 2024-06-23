<template>
  <div class="ep-header">
    <div class="ep-header__content">
      <template v-for="slotName in ['left', 'center', 'right']">
        <div
          v-if="$slots[slotName]"
          :key="slotName"
          :class="`ep-header__content__${slotName}`"
        >
          <slot :name="slotName" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpHeader',
  })
</script>
