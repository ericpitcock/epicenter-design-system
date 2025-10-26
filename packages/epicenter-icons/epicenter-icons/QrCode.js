import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 14.5V13C12 12.4477 12.4477 12 13 12H20.5M18.5 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H18.5M18 18.5V18.5C18 17.9477 17.5523 17.5 17 17.5H16C15.4477 17.5 15 17.0523 15 16.5V15M12 17.5V19.5M14.5 21H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 12H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3L12 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 8V4C9 3.44772 8.55228 3 8 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8Z' })
const _hoisted5 = h('path', { 'd': 'M9 20V16C9 15.4477 8.55228 15 8 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H8C8.55228 21 9 20.5523 9 20Z' })
const _hoisted6 = h('path', { 'd': 'M21 8V4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8Z' })

export default defineComponent({
    name: 'QrCode',
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
