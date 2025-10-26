import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V2H6C4.89543 2 4 2.89543 4 4V20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 10L10 7V13L15 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AudioBook01',
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
