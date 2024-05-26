<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="ep-loading"
      :style="styles"
    >
      <div class="ep-loading__icon-container">
        <!-- <img v-if="icon" :src="`${icon}.svg`" /> -->
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentcolor"
        >
          <g
            fill="none"
            fill-rule="evenodd"
          >
            <g
              transform="translate(1 1)"
              stroke-width="2"
            >
              <circle
                stroke-opacity=".5"
                cx="18"
                cy="18"
                r="18"
              />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
      <div class="ep-loading__message-container">
        <p>{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { ref, onMounted, watch } from 'vue'

  defineOptions({
    name: 'EpLoading',
  })

  const props = defineProps({
    loading: {
      type: Boolean,
      default: true
    },
    messages: {
      type: Array,
      default: () => [{
        icon: '',
        message: 'Loading...'
      }]
    },
    messageDelay: {
      type: Number,
      default: 2000
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['done'])

  const icon = ref('')
  const message = ref('')

  onMounted(() => {
    cycleMessages()
  })

  // watch loading prop and cycle messages when loading is true
  watch(() => props.messages, (newValue) => {
    if (newValue) {
      cycleMessages()
    }
  })

  const cycleMessages = () => {
    // every set duration, display the next message and icon by loading them into data
    // when the last message is displayed, emit a done event
    if (props.messages === null) return

    props.messages.forEach((message, index) => {
      setTimeout(() => {
        icon.value = message.icon
        message.value = message.message
        if (index === props.messages.length - 1) {
          setTimeout(() => {
            emit('done')
          }, props.messageDelay)
        }
      }, props.messageDelay * index)
    })
  }
</script>
