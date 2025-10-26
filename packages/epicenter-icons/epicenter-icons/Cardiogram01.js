import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.02067 18.5H6.01172M10.0086 18.5H9.99964', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.9976 15.1759L21.9989 18.4989C21.9995 20.1562 20.6562 21.5 18.9989 21.5H5.00556C3.34654 21.5 2.0025 20.1535 2.00557 18.4944L2.01172 15.1759M21.9976 15.1759L21.9994 5.50056C21.9998 3.84348 20.6565 2.5 18.9994 2.5H5.00277C3.34484 2.5 2.00124 3.84484 2.00278 5.50277L2.01172 15.1759M21.9976 15.1759H2.01172', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 8.5H8L10.5 11L13 7L15.5 10H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cardiogram01',
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
