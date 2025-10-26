import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 6.99997L12 3L16 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 17L12 21L8 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VerticalScrollPoint',
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
