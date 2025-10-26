import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 15L18.5 12M18.5 12L15.5 9M18.5 12L15.5 15M18.5 12L21.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 21.5L9 2.5' })
const _hoisted3 = h('path', { 'd': 'M2.5 15.5L9 15.5M2.5 8.5L9 8.5' })
const _hoisted4 = h('path', { 'd': 'M21.5 6V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeleteColumn',
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
