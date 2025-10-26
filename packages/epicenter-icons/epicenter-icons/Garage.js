import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 22V14C7 13.4477 7.44772 13 8 13H16C16.5523 13 17 13.4477 17 14V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 16H17M7 19H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.009 7.02344H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.1678 2.55585L3.68164 7.55527C3.26547 7.83319 3.01532 8.30035 3.01469 8.80079L2.99931 20.9987C2.99861 21.5515 3.44653 22 3.99931 22H20.0001C20.5524 22 21.0001 21.5523 21.0001 21V8.80278C21.0001 8.30125 20.7494 7.8329 20.3321 7.5547L12.8329 2.55518C12.3286 2.21904 11.6717 2.2193 11.1678 2.55585Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Garage',
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
