import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 11.9999H21.5823M19 15.5L22 12L19 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoveRight',
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
