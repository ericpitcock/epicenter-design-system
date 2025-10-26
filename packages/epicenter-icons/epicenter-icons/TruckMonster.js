import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '6.5', 'cy': '16.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '16.5', 'cy': '16.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 4L12.3106 7.24254C12.4219 7.6877 12.8219 8 13.2808 8H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 10.5H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 5H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M3 16H2V9.5H8.40497C8.993 9.5 9.4541 8.99508 9.40086 8.40946L9 4H14.5C14.8148 4 15.1111 4.14819 15.3 4.4L18 8L20.3866 9.02284C21.071 9.31615 21.5358 9.96535 21.5929 10.7077L22 16H20M10 16H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TruckMonster',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
