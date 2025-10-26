import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 3C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21L5 21C3.34315 21 2 19.6569 2 18V6C2 4.34315 3.34315 3 5 3H19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 7H18.5M17.5 10H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 3L14 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 10L9 12L7 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SidebarRight01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
