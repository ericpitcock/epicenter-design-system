import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3H4M6.25 6.5H4M6.25 6.5C7.2165 6.5 8 5.7165 8 4.75C8 3.7835 7.2165 3 6.25 3H5.5M6.25 6.5C7.2165 6.5 8 7.2835 8 8.25C8 9.2165 7.2165 10 6.25 10H5.5M4 6.5V3M4 6.5V10M3 10H4M4 3H5.5M4 10H5.5M5.5 3V2M5.5 10V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 17.5L18 13L21 17.5M15 17.5L18 22L21 17.5M15 17.5L18 18.625L21 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 5H17C18.1046 5 19 5.89543 19 7V9.61626C19 9.82822 18.8282 10.0001 18.6162 10.0001V10.0001C18.5404 10.0001 18.4664 9.97762 18.4033 9.93559L17 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.5 19L7.00002 19C5.89544 19 5 18.1046 5 17L5 14.3838C5 14.1718 5.17183 14 5.3838 14V14C5.45957 14 5.53364 14.0224 5.59669 14.0645L7 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Exchange02',
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
