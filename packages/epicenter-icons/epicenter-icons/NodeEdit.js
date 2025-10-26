import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 9.8125V12H17.1875L22 7.1875L19.8125 5L15 9.8125Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.9965 22C18.5488 22 18.9965 21.5523 18.9965 21V18C18.9965 17.4477 18.5488 17 17.9965 17H14C13.4477 17 13 17.4477 13 18V21C13 21.5523 13.4477 22 14 22H17.9965Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.994 19.5H7.99805C6.89348 19.5 5.99805 18.6046 5.99805 17.5V11.5M5.99805 11.5V8M5.99805 11.5H11.998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8.99538 8C9.54766 8 9.99538 7.55228 9.99538 7V3C9.99538 2.44772 9.54766 2 8.99538 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H8.99538Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NodeEdit',
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
