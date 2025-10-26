import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 12V9H20V12M16 12V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V12M16 12H20M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12M8 12V9H4L4 12M8 12L4 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 2V6M20 4H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 4H4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Magnet01',
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
