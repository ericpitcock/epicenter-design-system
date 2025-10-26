import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.999 12.4999L11.999 18.4999L5.99898 12.4999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.9993 5.49951L11.9994 11.4995L5.99932 5.49956', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowDownDouble',
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
