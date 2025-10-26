import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 12H10C11.1046 12 12 12.8954 12 14V18' })
const _hoisted2 = h('path', { 'd': 'M21 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V3M21 18.5L18.5 16M21 18.5L18.5 21M5.5 3L8 5.5M5.5 3L3 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RightAngle',
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
