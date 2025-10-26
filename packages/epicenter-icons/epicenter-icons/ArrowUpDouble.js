import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.00002 11.4998L12 5.49976L18 11.4997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.00002 18.4998L12 12.4998L18 18.4997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowUpDouble',
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
