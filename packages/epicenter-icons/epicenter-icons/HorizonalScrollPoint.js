import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.0001 12C14.0001 13.1046 13.1046 14 12.0001 14C10.8955 14 10.0001 13.1046 10.0001 12C10.0001 10.8954 10.8955 10 12.0001 10C13.1046 10 14.0001 10.8954 14.0001 12Z', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.0001 8L22.0001 12L18.0001 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.00009 8L2.00012 12L6.00012 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HorizonalScrollPoint',
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
