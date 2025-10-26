import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 2V5M6 2V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 3.5H4.5C3.39543 3.5 2.5 4.39543 2.5 5.5V20C2.5 21.1046 3.39543 22 4.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V5.5C21.5 4.39543 20.6046 3.5 19.5 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 16L12 18.5L14.5 16M12 12V17.8912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2.5 8.5H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CalendarDownload02',
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
