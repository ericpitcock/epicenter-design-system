import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 12V22M20 12V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 17H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 14.5H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.4087 5.4855L10.2087 2.4855C10.3894 2.1843 10.7149 2 11.0662 2H12.9338C13.2851 2 13.6106 2.1843 13.7913 2.4855L15.5913 5.4855C15.9912 6.15203 15.5111 7 14.7338 7H9.26619C8.4889 7 8.00878 6.15203 8.4087 5.4855Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 7V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TableLamp01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
