import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 8L15 2M21 2.00088L15 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11H5C3.89543 11 3 10.1046 3 9V6C3 4.89543 3.89543 4 5 4H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 15H5C3.89543 15 3 15.8954 3 17V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V17C21 15.8954 20.1046 15 19 15Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RowDelete',
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
