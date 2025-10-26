import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.00897 9L8 9M16 9L15.991 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 13H10C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Grimacing',
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
