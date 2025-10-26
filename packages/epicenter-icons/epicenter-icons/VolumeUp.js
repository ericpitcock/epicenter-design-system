import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 8.5H4C2.89543 8.5 2 9.39543 2 10.5V13.5C2 14.6046 2.89543 15.5 4 15.5H7L14 20V4L7 8.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 12H22M19.5 14.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VolumeUp',
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
