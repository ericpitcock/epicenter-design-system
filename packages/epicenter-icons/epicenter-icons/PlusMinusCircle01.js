import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 16.5H8.5M9 10.5H12M12 10.5H15M12 10.5V7.5M12 10.5V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PlusMinusCircle01',
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
