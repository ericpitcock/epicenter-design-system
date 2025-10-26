import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 2H6.5C5.39543 2 4.5 2.89543 4.5 4V20C4.5 21.1046 5.39543 22 6.5 22H16.5C17.6046 22 18.5 21.1046 18.5 20V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 5.5H12.5V11H19.5V5.5H18M14 5.5V4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4V5.5M14 5.5H18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 19H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MobileSecurity',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
