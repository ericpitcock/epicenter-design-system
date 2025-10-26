import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 14H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 3C11.603 3.31337 12.6797 4.51459 13 6M5 8V7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 9H15.5L12.5 12.5V18.5C12.5 19.8807 11.3807 21 10 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlphabetChinese',
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
