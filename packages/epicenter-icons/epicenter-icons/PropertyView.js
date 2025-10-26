import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 18.5H17.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 22C19.7614 22 22 18.5 22 18.5C22 18.5 19.7614 15 17 15C14.2386 15 12 18.5 12 18.5C12 18.5 14.2386 22 17 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12.5V5C21 3.34315 19.6569 2 18 2H5C3.34315 2 2 3.34315 2 5V18C2 19.6569 3.34315 21 5 21H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 7H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 16H8M11 12H16M7 12H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PropertyView',
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
