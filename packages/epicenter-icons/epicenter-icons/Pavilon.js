import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 21.5L9.90995 17.4005C9.96107 16.8893 10.3912 16.5 10.905 16.5H13.095C13.6088 16.5 14.0389 16.8893 14.09 17.4005L14.5 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21.5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 8.5C8.5 8.5 11.5 5 12 2.5C12.5 5 15.5 8.5 21 8.5C20.4028 10.2916 18.7262 11.5 16.8377 11.5H7.16228C5.2738 11.5 3.59719 10.2916 3 8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 11.5V21.5M18.5 11.5V21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pavilon',
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
