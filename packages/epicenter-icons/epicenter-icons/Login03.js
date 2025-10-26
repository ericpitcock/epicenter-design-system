import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 6V4C6 2.89543 6.89543 2 8 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H8C6.89543 22 6 21.1046 6 20V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 16.5L16 12L10.5 7.5V10.5H4V13.5H10.5V16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Login03',
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
