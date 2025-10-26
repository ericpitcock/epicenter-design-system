import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 9.5H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 9.5H3.5L4.67151 18.8721C4.85917 20.3734 6.13538 21.5 7.64835 21.5H16.3517C17.8646 21.5 19.1408 20.3734 19.3285 18.8721L20.5 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 9C5 5.41015 8.13401 2.5 12 2.5C15.866 2.5 19 5.41015 19 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hugeicons',
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
