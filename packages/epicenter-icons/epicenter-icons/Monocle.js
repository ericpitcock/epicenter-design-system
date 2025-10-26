import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '8', 'cy': '8', 'r': '6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '16', 'cy': '8', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 17V19C22 19.1704 21.9858 19.3374 21.9585 19.5M20 21.8293C19.6872 21.9398 19.3506 22 19 22C18.6494 22 18.3128 21.9398 18 21.8293M16 17V19C16 19.1704 16.0142 19.3374 16.0415 19.5M22 8V5M22 14V11M16 14V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Monocle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 25',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
