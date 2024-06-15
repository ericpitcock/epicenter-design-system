<template>
  <div
    v-click-outside="closeDropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <div
      @click.stop="toggleDropdown"
      @mouseover="onMouseover"
    >
      <slot
        v-if="$slots.trigger"
        name="trigger"
      />
      <ep-button v-bind="computedButtonProps" />
    </div>
    <div
      v-show="dropdownVisible"
      :class="classes"
    >
      <div class="ep-dropdown__content">
        <slot
          v-if="$slots.content"
          name="content"
        />
        <ep-menu
          v-else
          :menu-items="menuItems"
          menu-type="dropdown"
          divider-color="var(--border-color--lighter)"
          :container-props="computedContainerProps"
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import vClickOutside from '../../directives/clickOutside.js'
  import EpButton from '../button/EpButton.vue'
  import EpMenu from '../menu/EpMenu.vue'
  import { computed, ref, provide } from 'vue'

  defineOptions({
    name: 'EpDropdown',
  })

  const props = defineProps({
    context: {
      type: [String, Object, Array],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonProps: {
      type: Object,
      default: () => ({})
    },
    containerProps: {
      type: Object,
      default: () => ({})
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    showOnHover: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['select'])

  const dropdownVisible = ref(false)
  const buttonDefaults = {
    variant: 'secondary',
    size: 'default',
    title: '',
    label: 'Default Dropdown',
    iconRight: { name: 'chevron-down' },
    iconLeft: undefined
  }

  const computedButtonProps = computed(() => ({
    ...(props.disabled && { disabled: true }),
    ...buttonDefaults,
    ...props.buttonProps,
  }))

  const computedContainerProps = computed(() => ({
    styles: {
      '--ep-container-min-width': 'fit-content',
      '--ep-container-bg-color': 'var(--interface-overlay)',
      ...props.containerProps,
    },
  }))

  const classes = computed(() => [
    'ep-dropdown__container',
    { 'ep-dropdown__container--align-right': props.alignRight }
  ])

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) {
      return
    }
    dropdownVisible.value = !dropdownVisible.value
  }

  const closeDropdown = () => {
    if (props.disabled) {
      return
    }
    dropdownVisible.value = false
  }

  provide('contextData', props.context)

  const onClick = (payload) => {
    console.log(payload)
    // emit('select', { payload, context: props.context })
    emit('select', payload)
    closeDropdown()
  }

  const onMouseover = () => {
    if (props.disabled) {
      return
    }
    if (props.showOnHover) {
      dropdownVisible.value = true
    }
  }

  const onMouseleave = () => {
    if (props.disabled) {
      return
    }
    if (props.showOnHover) {
      dropdownVisible.value = false
    }
  }
</script>
