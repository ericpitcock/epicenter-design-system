import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9914 12H12.0004M15.9908 12H15.9998M7.99982 12H8.00879', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'MoreHorizontalCircle02',
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
