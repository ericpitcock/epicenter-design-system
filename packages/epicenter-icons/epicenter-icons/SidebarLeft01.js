import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 6V18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 3L10 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 7H6.5M5.5 10H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 10L15 12L17 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SidebarLeft01',
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
