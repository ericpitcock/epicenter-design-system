import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 10L13 13M15 9L11 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 17.5V6.5C19.5 5.39543 18.6046 4.5 17.5 4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5V17.5C4.5 18.6046 5.39543 19.5 6.5 19.5H17.5C18.6046 19.5 19.5 18.6046 19.5 17.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 22H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 2H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartWatch04',
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
