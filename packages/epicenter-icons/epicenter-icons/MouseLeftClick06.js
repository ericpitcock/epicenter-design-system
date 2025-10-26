import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 5.5V2M13.5 12V9', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 22C19.5 22 21 17.49 21 12C21 6.50998 19.5 2 13.5 2C7.49993 2 6 6.50996 6 12C6 17.49 7.49993 22 13.5 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 3L4.5 2M4 5.5L3 6', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 6.5C15 5.94772 14.5523 5.5 14 5.5H13C12.4477 5.5 12 5.94772 12 6.5V8C12 8.55228 12.4477 9 13 9H14C14.5523 9 15 8.55228 15 8V6.5Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 12H21', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MouseLeftClick06',
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
