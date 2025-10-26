import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 21V13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13V21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 8V6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 5V2M12 2H9M12 2H15.5L17 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 13H16.5238', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Shampoo',
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
