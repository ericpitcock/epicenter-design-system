import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 15.6837C11.0949 14.3069 13.504 15.1434 15 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 9C7.51931 9 8.74652 9 9.5 9.70898M9.5 9.70898C9.71381 9.91016 10 10.2239 10 10.5C10 10.7761 9.77614 11 9.5 11C9.20618 11 8.996 10.7566 9 10.5C9.0046 10.2053 9.33335 9.92413 9.5 9.70898ZM14 9C14.5193 9 15.7465 9 16.5 9.70898M16.5 9.70898C16.7138 9.91016 17 10.2239 17 10.5C17 10.7761 16.7761 11 16.5 11C16.2062 11 15.996 10.7566 16 10.5C16.0046 10.2053 16.3334 9.92413 16.5 9.70898Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Displeased',
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
