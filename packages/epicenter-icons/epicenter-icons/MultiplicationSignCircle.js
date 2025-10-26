import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 8.5L12 12M12 12L8.5 15.5M12 12L15.5 15.5M12 12L8.5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MultiplicationSignCircle',
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
