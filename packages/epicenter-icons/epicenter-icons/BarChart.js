import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 4H11C10.4477 4 10 4.44772 10 5V19C10 19.5523 10.4477 20 11 20H13C13.5523 20 14 19.5523 14 19V5C14 4.44772 13.5523 4 13 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 4H18C17.4477 4 17 4.44772 17 5V9C17 9.55228 17.4477 10 18 10H20C20.5523 10 21 9.55228 21 9V5C21 4.44772 20.5523 4 20 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 4H4C3.44772 4 3 4.44772 3 5V13C3 13.5523 3.44772 14 4 14H6C6.55228 14 7 13.5523 7 13V5C7 4.44772 6.55228 4 6 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BarChart',
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
