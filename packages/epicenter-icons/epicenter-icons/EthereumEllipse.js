import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.4912 12.1908L12 13.5L8.50883 12.1908M8 12L12 6L16 12L12 18L8 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })

export default defineComponent({
    name: 'EthereumEllipse',
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
