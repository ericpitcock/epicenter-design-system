import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 19.5V22H16.5L22 16.5L19.5 14L14 19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12.0247C22 6.48823 17.5228 2 12 2C6.47715 2 2 6.48823 2 12.0247C2 17.2229 5.94668 21.497 11 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GlobalEditing',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
