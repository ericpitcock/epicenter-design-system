import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 21C21.1046 21 22 20.1046 22 19V13C22 11.8954 21.1046 11 20 11H4C2.89543 11 2 11.8954 2 13V19C2 20.1046 2.89543 21 4 21H20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 6C15.0227 4.77354 13.5929 4 12 4C10.4071 4 8.97726 4.77354 8 6', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 8C13.5114 7.38677 12.7965 7 12 7C11.2035 7 10.4886 7.38677 10 8', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 14V18H6.5M19 18H17V16M17 16V14H19M17 16H18.5M9 14V18M11.5 14L13 18L14.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LiveStreaming01',
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
