import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 8H7C5.89543 8 5 8.89543 5 10V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V10C19 8.89543 18.1046 8 17 8Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 12H21C21.5523 12 22 12.4477 22 13V17C22 17.5523 21.5523 18 21 18H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 18L3 18C2.44772 18 2 17.5523 2 17L2 13C2 12.4477 2.44772 12 3 12L5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z' })
const _hoisted5 = h('path', { 'd': 'M12 5V8', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9 12V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M15 12V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M10 17C10 17 10.6667 17.5 12 17.5C13.3333 17.5 14 17 14 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Robotic',
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
            _hoisted5,
            _hoisted6,
            _hoisted7,
            _hoisted8
        ])
    }
})
