import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 10H17.5V6H9.5V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 6L2 6M6 12H2M6 18H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notebook01',
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
