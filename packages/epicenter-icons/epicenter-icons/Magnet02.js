import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 10V7H20V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V7H4V10M8 10L4 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.375 1.99982L10.5 4.99982H13.5L11.625 7.99982', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Magnet02',
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
