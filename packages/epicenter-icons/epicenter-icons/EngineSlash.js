import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 9V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 14V15M16 16V17C16 17.5523 15.5523 18 15 18H8.30278C8.10535 18 7.91234 17.9416 7.74808 17.8321L5.4453 16.2969C5.1671 16.1114 5 15.7992 5 15.4648V9C5 8.44772 5.44771 8 6 8H8M12 8H15C15.5523 8 16 8.44772 16 9V11H19V9C19 8.44772 19.4477 8 20 8H21C21.5523 8 22 8.44772 22 9V17C22 17.2761 21.8881 17.5261 21.7071 17.7071', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.5 6.5V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EngineSlash',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
