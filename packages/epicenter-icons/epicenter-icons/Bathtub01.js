import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5M8 6L10.5 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.00002 20L5 21M18 20L19 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 12V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 12H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bathtub01',
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
