import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 17L22 3M17.5 3L11.991 13.559C11.7247 14.0694 11.0844 14.249 10.5754 13.9801C8.10599 12.6756 4.82071 11.5584 3.34756 12.2423C1.6805 13.0162 1.54011 18.1781 3.03845 19.2361C4.71629 20.4208 9.68674 19.9937 11.7961 19.5103', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 13L6 20' })
const _hoisted3 = h('path', { 'd': 'M19 17H13C12.4477 17 12 17.4477 12 18V20C12 20.5523 12.4477 21 13 21H19C19.5523 21 20 20.5523 20 20V18C20 17.4477 19.5523 17 19 17Z' })

export default defineComponent({
    name: 'IceHockey',
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
