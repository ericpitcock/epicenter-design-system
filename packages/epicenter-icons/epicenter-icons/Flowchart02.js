import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 5V3C18 2.44772 17.5523 2 17 2H11C10.4477 2 10 2.44772 10 3V5C10 5.55228 10.4477 6 11 6H17C17.5523 6 18 5.55228 18 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 13V11C18 10.4477 17.5523 10 17 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H17C17.5523 14 18 13.5523 18 13Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 21V19C18 18.4477 17.5523 18 17 18H11C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22H17C17.5523 22 18 21.5523 18 21Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14 6V10M10 12H6C4.89543 12 4 12.8954 4 14V18M6 20H10', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 4H20C21.1046 4 22 4.89543 22 6V10C22 11.1046 21.1046 12 20 12H18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flowchart02',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
