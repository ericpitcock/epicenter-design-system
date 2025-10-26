import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 18.5V9.5C2.5 7.84315 3.84315 6.5 5.5 6.5H18.5C20.1569 6.5 21.5 7.84315 21.5 9.5V18.5C21.5 20.1569 20.1569 21.5 18.5 21.5H5.5C3.84315 21.5 2.5 20.1569 2.5 18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 13.5V5.5C2.5 3.84315 3.84315 2.5 5.5 2.5H18.5C20.1569 2.5 21.5 3.84315 21.5 5.5V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 14.5L12 17.5L15 14.5M12 16.5L12 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Download03',
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
