import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.9999 17V19.5C20.9999 20.3284 20.3284 21 19.4999 21L4.49994 21C3.67151 21 2.99994 20.3284 2.99994 19.5V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 11.5L12 16L16.5 11.5M12 15L12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Download01',
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
