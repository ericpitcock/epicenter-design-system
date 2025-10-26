import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3.5C13.6327 3.5 10.3673 20.5 4 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 3.5H6.87745C8.1494 3.5 9.2831 4.3021 9.70643 5.50154L14.2936 18.4985C14.7169 19.6979 15.8506 20.5 17.1225 20.5H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'XVariable',
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
