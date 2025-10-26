import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 4.9689V19.0311C4 19.7594 4.51844 20.3836 5.23167 20.5139L13.2317 21.9753C14.1524 22.1435 15 21.4328 15 20.4925V3.5075C15 2.56724 14.1524 1.85654 13.2317 2.02474L5.23167 3.48614C4.51844 3.61643 4 4.24055 4 4.9689Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 12.01L11.5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Door01',
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
