import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 7.5H16.8536C15.4009 7.5 14.0625 8.28757 13.357 9.55743L10.643 14.4426C9.93754 15.7124 8.59906 16.5 7.14639 16.5H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Lottiefiles',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
