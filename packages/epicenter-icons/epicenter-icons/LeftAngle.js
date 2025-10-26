import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 12H14C12.8954 12 12 12.8954 12 14V18' })
const _hoisted2 = h('path', { 'd': 'M3 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5V3M3 18.5L5.5 16M3 18.5L5.5 21M18.5 3L16 5.5M18.5 3L21 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LeftAngle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
