import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 10H21C21.5523 10 22 10.4477 22 11V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 14V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Loading04',
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
