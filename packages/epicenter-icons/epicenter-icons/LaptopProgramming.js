import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 14.5V3.5C20 2.94772 19.5523 2.5 19 2.5H5C4.44772 2.5 4 2.94772 4 3.5V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 7L17 8.5L15.5 10M8.5 7L7 8.5L8.5 10M13 6L11 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.32921 21.5C2.66379 21.5 2.18396 20.8622 2.36839 20.2229L4.01911 14.5H19.9514L21.6251 20.2191C21.8125 20.8593 21.3324 21.5 20.6654 21.5H3.32921Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopProgramming',
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
