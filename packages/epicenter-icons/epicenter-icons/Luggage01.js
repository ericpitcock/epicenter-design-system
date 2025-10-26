import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 6L8.86073 3.8356C8.9411 3.35341 9.35829 3 9.84713 3H14.1529C14.6417 3 15.0589 3.35341 15.1393 3.8356L15.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 6V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 6V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Luggage01',
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
            _hoisted4
        ])
    }
})
