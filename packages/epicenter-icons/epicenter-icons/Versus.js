import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 4L6 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 4L7 12L11 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 13.5V13C19 12.4477 18.5523 12 18 12H15C14.4477 12 14 12.4477 14 13V15C14 15.5523 14.4477 16 15 16H18C18.5523 16 19 16.4477 19 17V19C19 19.5523 18.5523 20 18 20H15C14.4477 20 14 19.5523 14 19V18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Versus',
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
