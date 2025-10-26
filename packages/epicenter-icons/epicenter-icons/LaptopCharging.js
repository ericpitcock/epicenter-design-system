import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22.5 20.5H1.5L3.5 16.5H20.5L22.5 20.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 16.5V5C20.5 4.17157 19.8284 3.5 19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 7L10.5 10H13.5L12 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopCharging',
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
