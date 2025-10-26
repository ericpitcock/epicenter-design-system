import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12L2 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 3L21 8M21 3L16 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TicTacToe',
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
