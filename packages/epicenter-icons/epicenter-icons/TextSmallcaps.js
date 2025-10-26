import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 18H6M8 3L8 18M2 5V4C2 3.44772 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 21H16.5M18 13L18 21M14 14.5V14C14 13.4477 14.4477 13 15 13H21C21.5523 13 22 13.4477 22 14V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextSmallcaps',
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
