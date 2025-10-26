import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.44828 3.5H6M20 3.5H11.5M11.5 2V5M7.44828 2V5M9.5 1V6', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 9L16 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 9L16 13.0833V21C16 22.1046 15.1046 23 14 23H6C4.89543 23 4 22.1046 4 21V13.0833L6.5 9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 15V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 15H16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Honey02',
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
            _hoisted5
        ])
    }
})
