import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 22V4.00001C19 2.89544 18.1046 2.00001 17 2.00001L7 2C5.89543 2 5 2.89543 5 4V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 22H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 22V18C14.5 17.4477 14.0523 17 13.5 17H10.5C9.94772 17 9.5 17.4477 9.5 18V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 6H10M14 9.5H10M14 13H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Building02',
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
