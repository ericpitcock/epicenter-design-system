import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '5', 'rx': '8', 'ry': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 11C7.60158 11.1808 8.27434 11.3898 9 11.5', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 18C7.60158 18.1808 8.27434 18.3898 9 18.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Database',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
