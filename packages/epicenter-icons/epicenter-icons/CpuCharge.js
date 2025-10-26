import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 2V4M15 2V4M9 20V22M15 20V22M4 9H2M4 15H2M22 15H20M22 9H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9L10 12H14L12 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CpuCharge',
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
