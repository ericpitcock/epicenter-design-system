import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 14C11 20 4 14 2 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 16H20.0022C21.1067 16 22.0022 15.1046 22.0022 14V6C22.0022 4.89543 21.1067 4 20.0022 4H10.0013C8.89775 4 8.00274 4.89384 8.00131 5.9974L8 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '8', 'cy': '12', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 8H18M18 12H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Teaching',
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
            _hoisted4
        ])
    }
})
