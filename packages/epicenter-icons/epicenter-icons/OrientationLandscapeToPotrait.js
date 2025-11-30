import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 9V6C12 4.89543 11.1046 4 10 4H4C2.89543 4 2 4.89543 2 6V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 20V14C20 12.8954 19.1046 12 18 12L4 12C2.89543 12 2 12.8954 2 14L2 20C2 21.1046 2.89543 22 4 22L18 22C19.1046 22 20 21.1046 20 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 4.5H20C21.1046 4.5 22 5.39543 22 6.5V9.5M18.5 2L16 4.5L18.5 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'OrientationLandscapeToPotrait',
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
