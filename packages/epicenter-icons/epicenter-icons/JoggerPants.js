import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 7.77778L12 5L15 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.00003 5V3C6.00003 2.44772 6.44775 2 7.00003 2H17C17.5523 2 18 2.44772 18 3V5M6.00003 5L3.00003 22H8.00003L12 12L16 22H21L18 5M6.00003 5H18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JoggerPants',
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
