<template>
  <div
    :class="['ep-badge', classes]"
    :style="badgeStyles"
  >
    {{ label }}
  </div>
</template>

<script>
  export default {
    name: 'EpBadge',
    props: {
      variant: {
        type: String,
        default: 'secondary'
      },
      outlined: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'Badge'
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      borderColor: {
        type: String,
        default: ''
      },
      textColor: {
        type: String,
        default: ''
      },
      uppercase: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `ep-badge--${this.variant}`,
          {
            'ep-badge--outlined': this.outlined,
            'ep-badge--uppercase': this.uppercase
          }
        ]
      },
      badgeStyles() {
        const styles = {}
        if (this.backgroundColor) {
          styles.backgroundColor = this.backgroundColor
        }
        if (this.borderColor) {
          styles.borderColor = this.borderColor
        }
        if (this.textColor) {
          styles.color = this.textColor
        }
        return styles
      }
    }
  }
</script>
