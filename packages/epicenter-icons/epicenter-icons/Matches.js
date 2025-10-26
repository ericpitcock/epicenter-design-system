import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 8H6C5.44772 8 5 8.44772 5 9V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V9C19 8.44772 18.5523 8 18 8Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 8V3C18 2.44772 17.5523 2 17 2H7C6.44772 2 6 2.44772 6 3V8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8V5M9 8V5M15 8V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.0098 19C13.5764 19 15 18 15 16C15 13.7048 12.5699 13.4 12.5699 11C11.0142 12 11.0142 15 11.0142 15C10.5 15 9.5 14 9.32991 13.5C8.38434 16 9.53066 19 12.0098 19Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Matches',
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
