import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22.4999 20.5H1.49988L3.49988 16.5H20.4999L22.4999 20.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.4999 16.5V5C20.4999 4.17157 19.8283 3.5 18.9999 3.5H4.99988C4.17145 3.5 3.49988 4.17157 3.49988 5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.49995 10.3996L10.9999 11.9996L15.4999 7.99963', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopCheck',
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
