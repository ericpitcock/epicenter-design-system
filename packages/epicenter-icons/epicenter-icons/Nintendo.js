import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 4.5H5C3.34315 4.5 2 5.84315 2 7.5V16.5C2 18.1569 3.34315 19.5 5 19.5H19C20.6569 19.5 22 18.1569 22 16.5V7.5C22 5.84315 20.6569 4.5 19 4.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 4.5V19.5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 4.5V19.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5012 15.5H19.4922', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4.50899 8.5H4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Nintendo',
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
