import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 17V15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 10H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 6H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Queue02',
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
