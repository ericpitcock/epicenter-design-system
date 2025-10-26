import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 15L13 21.9995M20 22L13 15.0005', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 5.5L19.1061 12M4.5 5.5L5.38612 20.121C5.4501 21.1766 6.32488 22 7.38246 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 5.5L14.7597 2.60608C14.6022 2.2384 14.2406 2 13.8406 2H10.1594C9.75937 2 9.39783 2.2384 9.24025 2.60608L8 5.5M16 5.5H21M16 5.5H8M8 5.5H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Delete04',
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
