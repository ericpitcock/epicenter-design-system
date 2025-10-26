import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.9999 8.92308V4C16.9999 2.89543 16.1045 2 14.9999 2H3.99994C2.89537 2 1.99994 2.89543 1.99994 4V15C1.99994 16.1046 2.89537 17 3.99994 17H8.92302', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.9999 9C21.1045 9 21.9999 9.89543 21.9999 11M10.9999 9C9.89537 9 8.99994 9.89543 8.99994 11M19.9999 22C21.1045 22 21.9999 21.1046 21.9999 20M10.9999 22C9.89537 22 8.99994 21.1046 8.99994 20M13.9999 9H16.9999M13.9999 22H16.9999M21.9999 14V17M8.99994 14V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Copy02',
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
