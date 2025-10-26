import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H19C20.6569 18 22 16.6569 22 15V5C22 3.34315 20.6569 2 19 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 22C14.8233 21.364 13.4571 21 12 21C10.5429 21 9.17669 21.364 8 22', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 6.5V9C6.5 9.55228 6.94772 10 7.5 10H10.5M10.5 10V6.5M10.5 10V13.5M17.5 13.5L14.5137 9.51944M13 6.5V11.05M13 11.05V13.5M13 11.05L14.5137 9.51944M17.5 6.5L14.5137 9.51944', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'ModernTv4K',
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
