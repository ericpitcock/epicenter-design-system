import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21.0001V3H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 5H20C21.1046 5 22 5.89543 22 7V17.5C22 18.6046 21.1046 19.5 20 19.5H11L10 17.5H4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 11.5C19 13.1568 17.6569 14.5 16 14.5C14.3431 14.5 13 13.1568 13 11.5C13 9.84314 14.3431 8.5 16 8.5C17.6569 8.5 19 9.84314 19 11.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 8.5H9.5M7.5 11.5H9.5M7.5 14.5H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Gpu',
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
            _hoisted4
        ])
    }
})
