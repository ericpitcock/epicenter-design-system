import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 14V9L12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 2V7C12 8.10457 12.8954 9 14 9H19', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 22L19 19L16 16M11 19H18.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileExport',
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
