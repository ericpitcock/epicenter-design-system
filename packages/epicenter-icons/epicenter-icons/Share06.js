import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 13C19 17.4183 15.4183 21 11 21C6.58172 21 3 17.4183 3 13C3 8.58172 6.58172 5 11 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 3H21V10M20.5 3.5L11 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Share06',
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
