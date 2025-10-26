import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 2L8 2C6.34315 2 5 3.34315 5 5L5 19C5 20.6569 6.34315 22 8 22L16 22C17.6569 22 19 20.6569 19 19L19 5C19 3.34315 17.6569 2 16 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 18H14.491M9.50115 16L9.49219 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.0078 7L11.9988 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 12L5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Domino',
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
