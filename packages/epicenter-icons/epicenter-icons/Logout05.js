import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.00002 21H4.50002C3.67159 21 3.00002 20.3284 3.00002 19.5L3.00002 4.49997C3.00002 3.67154 3.67159 2.99997 4.50002 2.99997L7.00002 2.99997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 7.49997L21 12L16.5 16.5M20 12L8.00002 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Logout05',
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
