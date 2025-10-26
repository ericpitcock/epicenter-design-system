import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.0001 13V19C19.0001 20.1046 18.1046 21 17.0001 21H5.00006C3.89549 21 3.00006 20.1046 3.00006 19V7C3.00006 5.89543 3.89549 5 5.00006 5H11.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 3H21V10M20.5 3.5L11 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Share05',
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
