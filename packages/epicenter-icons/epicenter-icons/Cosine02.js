import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 3.27124C18 1.33494 16.5884 10.3451 16.3311 11.9547C15.4666 17.362 14.1205 21 12 21C9.87955 21 8.53343 17.362 7.66891 11.9547C7.41158 10.3451 6 1.33494 2 3.27124', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 12H4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 12H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.5 12H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cosine02',
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
