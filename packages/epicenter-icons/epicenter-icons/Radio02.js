import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 15H7.50898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 11H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '15', 'cy': '13', 'r': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17 2L7 6', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M6 20V22M18 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Radio02',
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
