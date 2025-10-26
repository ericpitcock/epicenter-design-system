import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5L7.5 5C6.39543 5 5.5 5.89543 5.5 7V9.5M21 19H7.5C6.39543 19 5.5 18.1046 5.5 17V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 12C8 13.3807 6.88071 14.5 5.5 14.5C4.11929 14.5 3 13.3807 3 12C3 10.6193 4.11929 9.5 5.5 9.5C6.88071 9.5 8 10.6193 8 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CapStraight',
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
