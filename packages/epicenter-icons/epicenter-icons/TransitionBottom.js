import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 4C3 3.44772 3.44772 3 4 3L20 3C20.5523 3 21 3.44771 21 4V9C21 9.55228 20.5523 10 20 10L4 10C3.44772 10 3 9.55228 3 9L3 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 17L3 20C3 20.5523 3.44772 21 4 21L20 21C20.5523 21 21 20.5523 21 20V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 18L15 15M12 18L9 15M12 18L12 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TransitionBottom',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
