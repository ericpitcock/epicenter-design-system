import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 3.5L3.5 20C3.49999 21.1046 4.39542 22 5.5 22H18.5C19.4501 22 20.2454 21.3375 20.4493 20.4493M8.49998 17H16.5M8.49998 12H12M5.99998 2H18.5C19.6046 2 20.5 2.89543 20.5 4V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LicenseNo',
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
