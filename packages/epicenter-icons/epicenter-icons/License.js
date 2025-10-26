import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 20V4C20.5 2.89543 19.6046 2 18.5 2H5.50016C4.39559 2 3.50017 2.89542 3.50016 3.99998L3.50002 20C3.50001 21.1046 4.39544 22 5.50002 22H18.5C19.6046 22 20.5 21.1046 20.5 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 7H16M8 12H16M8 17L12 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'License',
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
