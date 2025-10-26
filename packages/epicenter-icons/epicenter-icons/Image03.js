import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '8.5', 'cy': '8.5', 'r': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 17L16 11H15L10 16L7.5 13.5H6.5L2 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Image03',
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
