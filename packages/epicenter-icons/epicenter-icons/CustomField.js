import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 10.5L16 8.5L18 10.5M14 13.5L16 15.5L18 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 12L10 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CustomField',
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
