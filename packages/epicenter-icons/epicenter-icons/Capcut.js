import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.99827 12L2.00001 16L1.99997 17.4999C1.99993 18.6045 2.89538 19.5 3.99997 19.5H16C17.1046 19.5 18 18.6046 18 17.5V16M9.99827 12L21.9957 6M9.99827 12L2.00001 8L2.00006 6.50001C2.0001 5.39547 2.89551 4.50008 4.00005 4.50007L16 4.50001C17.1046 4.5 18 5.39544 18 6.50001V8M9.99827 12L21.9957 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Capcut',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
