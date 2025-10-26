import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 3H4C2.89543 3 2 3.89543 2 5V7M17 3H19C20.1046 3 21 3.89543 21 5V7M2 18V20C2 21.1046 2.89543 22 4 22H6M17 22H19C20.1046 22 21 21.1046 21 20V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 3H13.5M9.5 22H13.5M21 10.5V14.5M2 10.5L2 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DashedLine02',
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
