import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.999 3V9L14.999 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0018 21C7.03127 21 3.00183 16.9706 3.00183 12C3.00183 7.02944 7.03127 3 12.0018 3C15.3331 3 18.2416 4.80989 19.7978 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Redo02',
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
