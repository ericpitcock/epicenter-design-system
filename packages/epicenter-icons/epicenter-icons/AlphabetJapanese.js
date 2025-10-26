import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.0078 3C9.5913 7 7.06961 14 11.5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 5.31913C6.70588 6.19855 15.1765 6.63826 21 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.0042 10C16.0042 14 12.3471 20.0435 7.00003 20C4.835 19.9824 4.00572 18.8936 4 17.5C3.98924 14.8768 7.19972 11.1735 12.0459 11.5C18.2934 11.921 22.033 16.8261 15.7931 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlphabetJapanese',
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
