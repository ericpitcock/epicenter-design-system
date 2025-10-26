import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 12.5C9.44772 11.8333 8.55228 11.8333 8 12.5C7.44772 13.1667 6.55228 13.1667 6 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.9142 18C16.1896 17.2971 15.7803 16.6255 15 16.5C14.2197 16.3745 13.8104 15.7029 14.0858 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '15', 'cy': '8', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19 13H18.991M9.00814 17H8.99919M8.00895 8H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bacteria',
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
