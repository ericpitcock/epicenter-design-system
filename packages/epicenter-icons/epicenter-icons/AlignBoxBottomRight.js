import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 22C3.89543 22 3 21.1046 3 20L3 4.0017C3 2.89647 3.89647 2.00076 5.0017 2.0017L18.0017 2.01277C19.1056 2.01371 20 2.90886 20 4.01277L20 20C20 21.1046 19.1046 22 18 22H5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 12H16.5M12.9444 17H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlignBoxBottomRight',
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
