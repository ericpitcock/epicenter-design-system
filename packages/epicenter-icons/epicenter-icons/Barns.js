import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 22V15H9V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 15H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 11H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 20V8.66372C3 7.99534 3.33388 7.37114 3.88983 7.00013L10.8784 2.33641C11.5518 1.88705 12.4296 1.88793 13.1021 2.33865L20.1135 7.03799C20.6675 7.40932 21 8.03239 21 8.69934V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 7V7.01', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Barns',
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
            _hoisted5
        ])
    }
})
