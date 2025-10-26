import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '5' })
const _hoisted3 = h('path', { 'd': 'M7 12H2', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 12H17', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 17L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 2L12 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PieChart07',
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
