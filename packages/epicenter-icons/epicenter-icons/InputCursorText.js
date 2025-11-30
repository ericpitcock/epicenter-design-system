import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 6V18M9 6C9 4.89543 9.89543 4 11 4M9 6C9 4.89543 8.10457 4 7 4M9 18C9 19.1046 9.89543 20 11 20M9 18C9 19.1046 8.10457 20 7 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 8H4C2.89543 8 2 8.89543 2 10V14C2 15.1046 2.89543 16 4 16H6M12 8H20C21.1046 8 22 8.89543 22 10V14C22 15.1046 21.1046 16 20 16H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InputCursorText',
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
