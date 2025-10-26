import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M7.5 12C7.5 18 12 22 12 22C12 22 16.5 18 16.5 12C16.5 6 12 2 12 2C12 2 7.5 6 7.5 12Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 12L2 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Globe02',
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
