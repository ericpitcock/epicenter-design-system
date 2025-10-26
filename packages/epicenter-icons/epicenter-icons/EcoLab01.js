import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 2H10C11.1046 2 12 2.89543 12 4V5H10C8.89543 5 8 4.10457 8 3V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 9V19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19V9H15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 9H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 3H14C12.8954 3 12 3.89543 12 5V6H14C15.1046 6 16 5.10457 16 4V3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EcoLab01',
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
            _hoisted5
        ])
    }
})
