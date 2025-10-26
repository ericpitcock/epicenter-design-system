import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 10V11.5M18.5 10V11.5M15.5 2.5V4M18.5 2.5V4M14 5.5H12.5M14 8.5H12.5M21.5 5.5H20M21.5 8.5H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 3L6 3C4.89543 3 4 3.89543 4 5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2.36839 20.7229L4.01911 15H19.9514L21.6248 20.7192C21.8121 21.3594 21.3321 22 20.6651 22H3.32921C2.66379 22 2.18397 21.3622 2.36839 20.7229Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AiLaptop',
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
