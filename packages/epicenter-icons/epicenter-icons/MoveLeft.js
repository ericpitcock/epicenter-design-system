import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 11.9999H2.4177M5 15.5L2 11.9999L5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoveLeft',
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
