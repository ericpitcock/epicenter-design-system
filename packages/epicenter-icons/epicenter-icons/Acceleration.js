import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 14L20 13.5M20 13.5L19.5 10.5M20 13.5L15 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 20V9.84269C3 9.04925 3.87974 8.57183 4.54499 9.00424L20.1716 19.1616C21.0062 19.7041 20.6221 21 19.6266 21H4C3.44772 21 3 20.5523 3 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

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
