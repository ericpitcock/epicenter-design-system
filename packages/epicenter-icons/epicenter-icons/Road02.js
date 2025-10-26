import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 4C2.89543 4 2 4.89543 2 6L2 18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4L4 4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 12H11M18.5 12H16.5M7.5 12H5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Road02',
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
