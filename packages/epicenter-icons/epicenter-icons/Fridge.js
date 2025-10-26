import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 10H20', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 6H8.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 17L8 14', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Fridge',
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
