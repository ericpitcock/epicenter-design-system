import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.1858 14L20.1858 13.5M20.1858 13.5L19.6858 10.5M20.1858 13.5L15.1858 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.18579 20V9.84268C3.18579 9.04924 4.06553 8.57183 4.73078 9.00424L20.3574 19.1616C21.192 19.7041 20.8079 21 19.8124 21H4.18579C3.63351 21 3.18579 20.5523 3.18579 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.18579 11C11.3949 11 13.1858 9.20914 13.1858 7C13.1858 4.79086 11.3949 3 9.18579 3C6.97665 3 5.18579 4.79086 5.18579 7C5.18579 9.20914 6.97665 11 9.18579 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Acceleration',
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
