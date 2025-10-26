import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 5H5C3.89543 5 3 5.89543 3 7V10C3 11.1046 3.89543 12 5 12H19C20.1046 12 21 11.1046 21 10V7C21 5.89543 20.1046 5 19 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 22V21.041M16.5 12V15.9142', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 2H17C17.5523 2 18 2.44772 18 3V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 8.5H16.991M13.009 8.5H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 16H15C14.4477 16 14 16.4477 14 17V20C14 20.5523 14.4477 21 15 21H18C18.5523 21 19 20.5523 19 20V17C19 16.4477 18.5523 16 18 16Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Beater',
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
