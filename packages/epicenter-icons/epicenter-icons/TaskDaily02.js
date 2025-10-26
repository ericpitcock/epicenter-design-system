import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 2H8.5V3.5C8.5 4.32843 9.17157 5 10 5H14C14.8284 5 15.5 4.32843 15.5 3.5V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 11L8.5 12L10.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13 17H16M13 11H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.49011 16.8672H8.50011', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TaskDaily02',
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
            _hoisted5
        ])
    }
})
