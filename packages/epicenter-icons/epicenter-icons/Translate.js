import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 7L19.9999 4.99997C19.9999 4.44769 19.5522 4 18.9999 4L17 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.99988 17V19C3.99988 19.5523 4.44759 20 4.99988 20H6.99988', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('rect', { 'height': '12', 'rx': '2', 'stroke-linejoin': 'round', 'width': '12', 'x': '10', 'y': '10' })
const _hoisted4 = h('path', { 'd': 'M13.5 19L15.5 13H16.5L18.5 19M14.5 17H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V10', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M8.50069 9.99999C8.50069 9.99999 7.50069 9.49999 6.50069 7.99999M9.5 6H11M9.5 6C9.16667 7 8 9.4 6 11M9.5 6H8M5 6H8M8 6V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Translate',
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
