import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 14V16.5M5 19V16.5M8 14V16.5M8 19V16.5M5 16.5H8M10 14H11.25M12.5 14H11.25M11.25 14V19M14.5 19V14L16.25 16.5L18 14V19M20 14V19H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 11V9L11 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 2V7C11 8.10457 11.8954 9 13 9H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HtmlFile02',
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
