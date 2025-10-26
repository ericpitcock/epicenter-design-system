import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 16V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 21L11.1667 18M12.8333 18L17 21M12 18V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '10', 'r': '3', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CameraTripod',
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
