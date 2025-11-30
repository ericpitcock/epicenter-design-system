import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 10C14.2091 10 16 9.10457 16 8C16 6.89543 14.2091 6 12 6C9.79086 6 8 6.89543 8 8C8 9.10457 9.79086 10 12 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 12C16 13.1046 14.2091 14 12 14C9.79086 14 8 13.1046 8 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 8V16C16 17.1046 14.2091 18 12 18C9.79086 18 8 17.1046 8 16V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 2H22V6M21.5 2.5L18 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 2H2V6M2.5 2.5L6 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 22H22V18M21.5 21.5L18 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M6 22H2V18M2.5 21.5L6 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DatabaseExpand',
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
            _hoisted7
        ])
    }
})
