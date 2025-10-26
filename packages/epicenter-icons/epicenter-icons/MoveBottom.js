import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0001 12L12.0001 21.5823M8.5 19L12.0001 22L15.5 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoveBottom',
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
