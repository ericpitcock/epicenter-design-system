import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.00074 2L4 6H17L21 2H8.00074Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 17.955V8.92411M8 17.955L14.0007 17.9555M8 17.955L4.54551 21.3998M21.0007 2V17.544C21.0007 17.8073 20.8969 18.06 20.7117 18.2472L17 22L4 21.9438V5.98876M17 5.98876V21.3998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Rectangular01',
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
