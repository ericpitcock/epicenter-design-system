import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 20.7288C18 22.6651 16.5884 13.6549 16.3311 12.0453C15.4666 6.63802 14.1205 3 12 3C9.87955 3 8.53343 6.63802 7.66891 12.0453C7.41158 13.6549 6 22.6651 2 20.7288', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 12H4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 12H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 12H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cosine01',
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
