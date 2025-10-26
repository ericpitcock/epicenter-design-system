import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 19C5.26413 19.9564 5.79671 21 7.18729 21C9.59365 21 10.1952 19 12 12C13.8048 5 14.4064 3 16.8127 3C18.2033 3 18.7359 4.04358 19 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 10H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Function',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
