import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 7H8C7.44772 7 7 7.44772 7 8V12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12V8C13 7.44772 12.5523 7 12 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 7V7.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 11V15C17 16.1046 16.1046 17 15 17H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 17H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V8.5M8.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15.5M15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V8.5M15.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'QrCodeScan',
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
