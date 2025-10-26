import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 16.9998C9.83563 16.372 10.8744 16 12 16C13.1256 16 14.1644 16.372 15 16.9998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 8C7.51931 8 8.74652 8 9.5 8.70898M9.5 8.70898C9.71381 8.91016 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.20618 10 8.996 9.75659 9 9.5C9.0046 9.2053 9.33335 8.92413 9.5 8.70898ZM14 8C14.5193 8 15.7465 8 16.5 8.70898M16.5 8.70898C16.7138 8.91016 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10C16.2062 10 15.996 9.75659 16 9.5C16.0046 9.2053 16.3334 8.92413 16.5 8.70898Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Suspicious',
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
