import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 17.5008L10.501 13.5M13.501 10.5L17.501 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z' })
const _hoisted3 = h('path', { 'd': 'M21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5Z' })
const _hoisted4 = h('path', { 'd': 'M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z' })

export default defineComponent({
    name: 'StraightEdge',
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
