import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0001 12L12.0001 2.41768M8.5 4.99998L12.0001 1.99998L15.5 4.99998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MoveTop',
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
