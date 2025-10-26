import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.6 22C5.6 21.1163 4.88366 20.4 4 20.4M8.8 22C8.8 19.349 6.65097 17.2 4 17.2M12 22C12 17.5817 8.41828 14 4 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 22L18 22C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H7C5.89543 2 5 2.89543 5 4V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Transmission',
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
