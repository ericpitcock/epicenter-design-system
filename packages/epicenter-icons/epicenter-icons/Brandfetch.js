import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 6.85746C10.5 2.42557 19 3.53936 19 7.52832C19 10.5665 11.5 12 11.5 12V12.2349C12.7814 12.22 17.5 12.0979 17.5 14.451C17.5 19.0482 8 17.8628 8 17.8628', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 8.5L7 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Brandfetch',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
