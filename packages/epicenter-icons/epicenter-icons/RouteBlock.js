import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 2L21 8M21 2L15 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '6', 'cy': '19', 'r': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 5H8.5C6.567 5 5 6.567 5 8.5C5 10.433 6.567 12 8.5 12H15.5C17.433 12 19 13.567 19 15.5C19 17.433 17.433 19 15.5 19H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RouteBlock',
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
