import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 20V4.00009L13 20V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 13L22 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.002 5.50009C16.002 4.67163 16.6736 4.00001 17.502 4.00001L20.5001 4C21.3285 4 22.0001 4.67155 22.0001 5.49997L22.0002 8.49998C22.0002 9.32842 21.3286 10 20.5002 10H17.5022C16.6738 10 16.0023 9.32849 16.0022 8.5001L16.002 5.50009Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextNumberSign',
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
