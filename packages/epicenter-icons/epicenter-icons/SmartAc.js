import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 3H5C3.34315 3 2 4.34315 2 6V12C2 13.6569 3.34315 15 5 15H19C20.6569 15 22 13.6569 22 12V6C22 4.34315 20.6569 3 19 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 12H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 7H18.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6.8 18C6.8 18 7.6 19.875 6 21M17.2 18C17.2 18 16.4 19.875 18 21M12 18V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartAc',
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
